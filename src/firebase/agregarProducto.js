import { db, storage } from './firebaseConfig';

const agregarProducto = async ({ codigo, descripcion, imagen }) => {
  const ref = db.ref('Tienda/Articulos');
  // Verificar si existe registro
  const snapshot = await ref
    .orderByChild('codigo')
    .equalTo(codigo)
    .once('value');
  if (!snapshot.exists()) {
    // Insert Storage
    const storageRef = storage.ref(
      `pics/image:${Math.random()
        .toString(36)
        .substring(2)}`
    );
    let uploadTask = storageRef.put(imagen);

    return uploadTask.then(snapshot_1 => {
      // Obtener url de imagen
      snapshot_1.ref.getDownloadURL().then(downloadURL => {
        // Insert Base de datos
        const newPostRef = ref.push();
        newPostRef.set({
          _ID: newPostRef.key,
          codigo: codigo,
          descripcion: descripcion,
          imagen: downloadURL
        });
      });
    });
  } else {
    throw new Error('Existe');
  }
};

export default agregarProducto;