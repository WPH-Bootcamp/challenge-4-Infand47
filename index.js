const prompt = require("prompt-sync")({ sigint: true });

let todos = [
  { id: 1, text: "Belajar JavaScript", isCompleted: false },
  { id: 2, text: "Makan siang", isCompleted: false },
  { id: 3, text: "Olahraga", isCompleted: true }
];
function listTodos() {
    console.log("Daftar Todo Saat Ini:");

    todos.forEach(todo => {
        const status = todo.isCompleted ? "[Selesai]" : "[Belum Selesai]";
        console.log(`${todo.id}. ${todo.task} ${status}`);
    });
};

function generateUniqueId() {
  // TODO: Implementasi fungsi untuk menghasilkan ID unik
  // Ini akan digunakan secara internal untuk setiap objek to-do
  // Contoh: Gabungan waktu saat ini dan angka acak

    const timestamp = Date.now().toString();
    
    const randomStr = Math.random().toString(36).substring(2, 10);
    
    const uniqueId = timestamp + randomStr;
    
    return uniqueId;
}
console.log(generateUniqueId());

function addTodo() {
  // TODO: Implementasi logika untuk menambah to-do baru
  // 1. Minta input teks to-do dari user menggunakan `prompt()`
  // 2. Validasi input: Pastikan teks tidak kosong atau hanya spasi
  // 3. Buat objek to-do baru dengan properti: id (dari generateUniqueId), text, dan isCompleted (boolean, default false)
  // 4. Tambahkan objek to-do ini ke array `todos`
  // 5. Beri feedback ke user bahwa to-do berhasil ditambahkan

      const todoText = prompt("Kerjakan Tugas:");
    
    if (!todoText || todoText.trim() === "") {
        alert("Input tidak boleh kosong. Silakan coba lagi.");
        return; 
    }
    
    let newTodo = {
        id: nextId,
        text: todoText.trim(),
        isCompleted: false
    };
    
    todos.push(newTodo);
    
    alert("Todo berhasil ditambahkan: " + newTodo.text);
    console.log("Todos saat ini:", todos);
}

function markTodoCompleted() {
  // TODO: Implementasi logika untuk menandai to-do sebagai selesai
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
listTodos();

  // 2. Minta user memasukkan NOMOR to-do yang ingin ditandai sebagai selesai
const input = prompt("Masukkan nomor to-do yang ingin ditandai selesai (atau klik Cancel untuk keluar):");

    if (input === null) {
        alert("Operasi dibatalkan.");
        return;
    }
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid (1 sampai jumlah to-do)
      const todoNumber = parseInt(input);  
    if (isNaN(todoNumber) || todoNumber < 1 || todoNumber > todos.length) {
        alert("Input salah! Masukkan nomor yang valid (1 sampai " + todos.length + ").");
        return; 
    }
  // 4. Ubah properti `isCompleted` dari to-do yang dipilih menjadi `true`
      if (todo.isCompleted) {
        alert(`Todo "${todo.task}" sudah selesai sebelumnya. Tidak ada perubahan.`);
        return; 
    }
  // 5. Beri feedback ke user bahwa to-do berhasil ditandai selesai
  todo.isCompleted = true;

  // 6. Tangani kasus jika to-do sudah selesai
  alert(`Yeay! Todo "${todo.task}" sudah ditandai sebagai selesai.`);
}

function deleteTodo() {
  // TODO: Implementasi logika untuk menghapus to-do
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  listTodos();

  // 2. Minta user memasukkan NOMOR to-do yang ingin dihapus
    const input = prompt("Masukkan nomor todo yang ingin dihapus (atau tekan Cancel untuk keluar):");

    if (input === null) {
    console.log("Operasi dibatalkan.");
    return;
  }
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid
   // Validasi input: harus angka
  const todoNumber = parseInt(input);
  if (isNaN(todoNumber)) {
    console.log("Input tidak valid. Harus berupa angka.");
    return;
  }
    // Validasi rentang: harus antara 1 dan jumlah todos
  if (todoNumber < 1 || todoNumber > todos.length) {
    console.log(`Nomor todo harus antara 1 dan ${todos.length}.`);
    return;
  }
  // 4. Hapus to-do yang dipilih dari array `todos`
  todos.splice(todoIndex, 2);

  // 5. Beri feedback ke user bahwa to-do berhasil dihapus
  console.log(`Todo "${todo.text}" telah dihapus.`);
}

function listTodos() {
  // TODO: Implementasi logika untuk menampilkan semua to-do
  // 1. Tampilkan judul daftar (misal: "--- YOUR TO-DO LIST ---")
  console.log("--- MY TO-DO LIST ---");

  // 2. Cek apakah array `todos` kosong. Jika ya, tampilkan pesan "No to-dos to display."
      if (todos.length === 0) {
        console.log("No to-dos to display.");
    }
  // 3. Jika tidak kosong, iterasi (loop) melalui array `todos`
  else { for (let i = 0; i < todos.length; i++){
  // 4. Untuk setiap to-do, tampilkan nomor urut, status ([DONE] atau [ACTIVE]), dan teks to-do
    //    Contoh format: "1. [ACTIVE] | Belajar JavaScript"
            const status = todos[i].completed ? "[DONE]" : "[ACTIVE]";
            console.log(`${i + 1}. ${status} | ${todos[i].text}`);
        }
    }
  // 5. Tampilkan garis penutup daftar
   console.log("--- END OF LIST ---");
}

function runTodoApp() {
  // TODO: Implementasi logika utama aplikasi (menu interaktif)
  // Ini adalah "otak" aplikasi yang terus berjalan sampai user memilih untuk keluar
  let running = true;
  while (running) {
    // 1. Tampilkan menu perintah yang tersedia (add, complete, delete, list, exit)
        function showMenu() {
    console.log("\n=== Menu Perintah ===");
    console.log("1. add - Tambah to-do baru");
    console.log("2. complete - Tandai to-do sebagai selesai");
    console.log("3. delete - Hapus to-do");
    console.log("4. list - Tampilkan semua to-do");
    console.log("5. exit - Keluar dari aplikasi");
}
    // 2. Minta user memasukkan perintah menggunakan `prompt()`
    // 3. Gunakan `switch` statement atau `if/else if` untuk memanggil fungsi yang sesuai
    //    berdasarkan perintah yang dimasukkan user
    // 4. Tangani perintah 'exit' untuk menghentikan loop aplikasi
    // 5. Tangani input perintah yang tidak valid
        showMenu(); 
    const command = prompt("Masukkan perintah (add, complete, delete, list, exit):").toLowerCase(); // Minta input user dan ubah ke lowercase
    
     switch (command) {
        case 'add':
            addTodo();
            break;
        case 'complete':
            completeTodo();
            break;
        case 'delete':
            deleteTodo();
            break;
        case 'list':
            listTodos();
            break;
        case 'exit':
            console.log("Terima kasih telah menggunakan aplikasi Todo List. Sampai jumpa!");
            running = false; 
            break;
        default:
            console.log("Perintah tidak valid. Silakan pilih dari menu yang tersedia.");
            break;
    }
  }
}

// Jangan ubah bagian di bawah ini. Ini adalah cara Node.js menjalankan fungsi utama
// dan mengekspor fungsi-fungsi untuk pengujian (jika nanti ada).

if (require.main === module) {
  runTodoApp();
}

module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp,
};
