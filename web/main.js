total = 0;
salery = 100;
people = [];
var money;
function appendlist() {
  name = document.getElementById("Name").value;
  ele = document.getElementsByName("jobs");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      Job = ele[i].value;
      input = [name + ", " + Job];
      people.push([name + ", " + Job]);
    }
  }
  job_list = ["Lawyer", 0.1, "Trainer", 0.05, "Maid", 0.01, "Assassin", 0.25];
  console.log("people " + people);
  console.log("peolple 1st " + people[0])
  console.log("input " + input)
  money = salery * job_list_return(input[0]);
  console.log(money);
  insert = `<li class="list-group-item"><span>${input}
  is making ${money}
  </span></li>`;
  $("#table").append(insert);
}

//list1 = array.(eel.passlist)
//list1.forEach(iterate);

//<li class="list-group-item"><span>List Group Item 1</span></li>

function job_list_return(List2) {
  console.log(List2)
  List2 = List2.split(", ")
  console.log(List2)
  switch (List2[1]) {
    case job_list[0]:
      return job_list[1];
      break;
    case job_list[2]:
      return job_list[3];
      break;
    case job_list[4]:
      return job_list[5];
      break;
    case job_list[6]:
      return job_list[7];
      break;
    default:
      return 0;
      break;
  }
}
