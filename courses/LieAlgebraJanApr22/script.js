function load_json(){
  var notes = lectuenotes
  notes.forEach(
    (note, i) =>
    {
      html_code =
      '<p>' +
      '<b>Lecture ' + i + ': </b>' + notes[i]["description"] +
      '<a href="' + notes[i]["links"][0]["href"] + '">' + notes[i]["links"][0]["dispname"] + '</a>' +
      '</p>'
      alert(html_code)
    }
  );
}
