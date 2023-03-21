// Add JavaScript below
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://tsiaiggzguzwwtwnjdis.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzaWFpZ2d6Z3V6d3d0d25qZGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMjg3OTQsImV4cCI6MTk5MzcwNDc5NH0.dP5smOnONnb9D6Xz0w3QhW6pva0fgljMfHnFiygSXuw'
const supabase = createClient(supabaseUrl, supabaseKey)


let { data: books, error } = await supabase
  .from('books')
  .select('*')

for(let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<td>${book.title}</td> <td>${book.Author}</td> <td>${book.ISBN}</td>`;
  
}