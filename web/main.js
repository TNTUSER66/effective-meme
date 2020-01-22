function iterate(i) {
  console.log(i)
  //$('#table').append('<li class="list-group-item"><span>`${list[i]} is making </span></li>')
}
total = 0
function appendlist() {
  name = document.getElementById("Name").value
  ele = document.getElementsByName('jobs')
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      Job = ele[i].value
  }
job_list = ["Lawyer", .1,
"Trainer", .05,
"Maid", .01,
"Assassin", .25,]
  inputList P= [name, Job];
  console.log(inputList)
  for (let i = 0; i < inputList.length; index += 2) {
    switch(inputList[i+1]){
      case job_list[1]:
        total = job_list[2]
        break
      case job_list[1]:
        total = job_list[2]
        break
    }
    insert = `<li class="list-group-item"><span>${inputList[i]}, ${inputList[i+1]} is making </span></li>`
    $('#table').append(insert)
  }
  
  //list1 = array.(eel.passlist)
  //list1.forEach(iterate);
}
//<li class="list-group-item"><span>List Group Item 1</span></li>


