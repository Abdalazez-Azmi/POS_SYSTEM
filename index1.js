let add_items = document.getElementById("icon");
let products_animate = document.getElementsByClassName("final");
let main_content = document.getElementsByClassName("d-1");
let products_total = document.getElementById("total");
let main_Total = document.getElementById("main_Total");
let f_p = document.getElementsByClassName("f-p");
let stat_1 = document.getElementById("status");
let tag4 = document.getElementById("tag4");
let countOfItem = document.getElementsByClassName("count_items");
let sec_div = document.getElementById("sec_div");
let input_price = document.getElementById("item-price");
let main_items = document.getElementById("main_items");
let main_price = document.getElementById("main_price");
let emp_leaved = document.getElementById("emp_leaved");
let add_v2 = document.getElementById("add_itemv2");
let product_name = document.getElementById("name1");
let main_product_name = document.getElementById("main_product_name");
let input_value = document.querySelectorAll("res");
let main_div = document.getElementById("main_div");
let input_value_of_add_item = document.getElementsByClassName(
  "input_value_of_add_item"
);
let Accounts = document.getElementById("Accounts");
let t_body = document.getElementById("t_body");
let cust_give_you = document.getElementById("cust_give_you");
let give_cust = document.getElementById("give_cust");
let show = document.getElementById("show");
let td = document.getElementById("tb");
let leaved = document.getElementById("leaved");
let employee_input = document.getElementsByClassName("employee_input");
let tbody_1 = document.getElementById("tbody_1");
let h1_For_error = document.getElementById("h1_For_error");
let table_add_product = document.getElementById("table_add_product");
let table_of_employees_managment = document.getElementById(
  "table_of_employees_managment"
);
let rows = document.getElementsByClassName("rows");
lettable_of_employees_managment = document.getElementById(
  "table_of_employees_managment"
);
let refresh = document.getElementById("refresh");
let chosen_file = document.getElementById("chosen_file");
let value_of_supplier = document.getElementById("value_of_supplier");

// window.onload=$(document).ready(function(){
//   let protocol = 5502
// page=  window.location.pathname
//     const url= (`http://${document.domain}:${protocol}${page}`)
// console.log(url)
// if (page === '/emp_manag.html') {
//   window.location.host = 5503
// }else if(page === '/SearchProduct.html'){
//   protocol = 5504
// }
// protocol = 5502
// }

// )

const remove = () => {
  let list_of_td = td.children;
  let arr = [];
  for (let i = 0; i < list_of_td.length - 1; i++) {
    arr.push(list_of_td[i].innerHTML);
    console.log(arr[i]);
    list_of_td[i].innerHTML = "";
    let last = leaved.children;
    last[i].innerHTML = arr[i];
  }
};

window.onload = $().ready(function () {
  $("#show").click(function () {
    if (sec_div.style.display !== "none") {
      sec_div.style.display = "none";
      show.innerHTML = "Show Data";
    } else {
      sec_div.style.display = "block";
      show.innerHTML = "Hide Data";
    }
  });
});

const product_info = () => {
  let row = table_add_product.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();
  let cell4 = row.insertCell();
  let cell5 = row.insertCell();
  let cell6 = row.insertCell();
  let cell7 = row.insertCell();
  let cell8 = row.insertCell();
  let cell9 = row.insertCell();
  let minus = document.createElement("button");
  minus.innerHTML = "X";
  minus.setAttribute("id", "crud");
  cell9.append(minus);
  let remove_count = document.createElement("button");
  remove_count.innerHTML = "-";
  remove_count.setAttribute("id", "remove_count");
  let Add_count = document.createElement("button");
  Add_count.innerHTML = "+";
  Add_count.setAttribute("id", "Add_count");
  Add_count.setAttribute("class", "crud+");
  remove_count.setAttribute("class", "crud");
  cell7.append(Add_count);
  cell8.append(remove_count);

  let crud_opearator = document.getElementsByClassName("edit_operator");
  let arr_of_opr = [];
  for (let i = 0; i < input_value_of_add_item.length; i++) {
    if (!input_value_of_add_item[i].value.length) {
      let anchor = document.createElement("a");
      anchor.setAttribute("href", "SearchProduct.html");
      document.body.innerHTML = "";
      let header = document.createElement("h1");
      header.setAttribute("class", "back1");
      document.body.append(header);
      header.innerHTML = "Sorry You will cannot insert null values";
      document.body.append(refresh);
      refresh.append(anchor);
      anchor.innerHTML = "Refresh Page";
      refresh.style.display = "block";
    }

    let result_of_input = [];
    result_of_input.push(input_value_of_add_item[0]);
    result_of_input.push(input_value_of_add_item[1]);
    result_of_input.push(input_value_of_add_item[2]);
    result_of_input.push(input_value_of_add_item[3]);
    result_of_input.push(input_value_of_add_item[4]);

    arr_of_opr.push(crud_opearator[0]);
    cell1.innerHTML = input_value_of_add_item[0].value;
    cell2.innerHTML = input_value_of_add_item[1].value;
    cell3.innerHTML = input_value_of_add_item[2].value;
    cell4.innerHTML = input_value_of_add_item[3].value;
    cell5.innerHTML = input_value_of_add_item[4].value;
    cell6.innerHTML = cell2.innerHTML * cell3.innerHTML;

    for (let i = 0; i < rows.length + 1 * 6; i++) {
      cell1.setAttribute("class", "rows");
      cell2.setAttribute("class", "rows");
      cell3.setAttribute("class", "rows");
      cell4.setAttribute("class", "rows");
      cell5.setAttribute("class", "rows");
      cell9.setAttribute("class", "rows");
    }
  }

  // chosen_file.replaceChild(window.location.pathname)
  // img_src.push()

  // console.log(chosen_file.value);
  let slash = chosen_file.value.slice(11);
  // console.log(slash)

  // let sources = chosen_file.value.replace(
  //   "fakepath",
  //   "Users" +
  //     slash +
  //     "Oracle" +
  //     slash +
  //     "Desktop" +
  //     slash +
  //     "POS_SYSTEM" +
  //     slash +
  //     "Add_new_Products"
  // );

  let parent_of_div = document.getElementById("imgs-1");
  let main_div = document.createElement("div");
  main_div.setAttribute("class", "final");
  parent_of_div.appendChild(main_div);
  let img_for_product = document.createElement("img");
  img_for_product.setAttribute("src", `Add_new_Products/${slash} `); /////////////////////

  main_div.appendChild(img_for_product);
  let secound_div = document.createElement("div");
  main_div.appendChild(secound_div);
  let span = document.createElement("span");
  span.setAttribute("onclick", "Additems()");
  span.setAttribute("class", "icon");
  span.setAttribute("id", "icon");
  span.innerHTML = "+";
  secound_div.appendChild(span);
  let span_for_Count = document.createElement("span");
  span_for_Count.setAttribute("class", "count_items");
  span_for_Count.innerHTML = 0;
  secound_div.appendChild(span_for_Count);
  let span_minus = document.createElement("span");
  span_minus.setAttribute("onclick", "remove_items()");
  span_minus.setAttribute("id", "icon1");

  span_minus.innerHTML = "-";
  secound_div.appendChild(span_minus);
  let span_for_price = document.createElement("span");
  span_for_price.setAttribute("class", "price-word");
  span_for_price.innerHTML = "Price :";
  secound_div.appendChild(span_for_price);
  let input_for_value_of_items = document.createElement("input");
  input_for_value_of_items.setAttribute("type", "number");
  input_for_value_of_items.setAttribute(
    "value",
    input_value_of_add_item[2].value
  );
  input_for_value_of_items.setAttribute("id", "item-price");
  input_for_value_of_items.setAttribute("class", "inp");
  document.getElementById("item-price").readyOnly = true;
  secound_div.appendChild(input_for_value_of_items);
  let product_of_item = document.createElement("span");
  product_of_item.setAttribute("class", "product_name");
  product_of_item.setAttribute("id", "product_name");
  product_of_item.innerHTML = input_value_of_add_item[0].value;
  secound_div.appendChild(product_of_item);
  let main_table = minus.parentElement.parentElement;

  $(document).ready(function () {
    $(main_table.lastChild).click(function () {
      $(main_table).remove();
    });
  });
  let plus = document.getElementsByClassName("crud+");
  ////Add_count
  $(document).ready(function () {
    for (let i = 0; i < plus.length; i++) {
      $(plus[i]).click(function () {
        cell3.innerHTML++;
        cell6.innerHTML = cell2.innerHTML * cell3.innerHTML;
        return;
      });
    }
  });
  let rem = document.getElementsByClassName("crud");
  $(document).ready(function () {
    for (let i = 0; i < rem.length; i++) {
      $(rem[i]).click(function () {
        cell3.innerHTML--;
        cell6.innerHTML = cell2.innerHTML * cell3.innerHTML;
      });
    }
  });

  ///// you will need upload that to the calculate page
  value_of_supplier.value = cell2.innerHTML * cell3.innerHTML;
  /// need to edit value

  localStorage.setItem("crud_operator", arr_of_opr[0]);

  localStorage.setItem("product_name", cell1.innerHTML);
  localStorage.setItem("cell2", cell2.innerHTML);
  localStorage.setItem("cell3", cell3.innerHTML);
  localStorage.setItem("cell4", cell4.innerHTML);
  localStorage.setItem("cell5", cell5.innerHTML);
  localStorage.setItem("total", value_of_supplier.value);

  add_accounts();
};

window.onload = $(document).ready(function () {
  for (let i = 0; i < f_p.length; i++) {
    $(f_p[i]).toggle();
    $(f_p[i]).toggle(4000);
  }
});

window.onload = $(document).ready(function () {
  for (let i = 0; i < main_content.length; i++) {
    $(main_content[i]).toggle();
    $(main_content[i]).toggle(4000);
  }
});

window.onload = $(document).ready(function () {
  for (let i = 0; i < products_animate.length; i++) {
    $(products_animate[i]).hide();
    $(products_animate[i]).show(10000);
  }
});

const add_accounts = () => {
  if (Accounts.innerHTML === "Show Information") {
    main_div.style.display = "none";
    Accounts.innerHTML = "Hide Information";
  } else {
    main_div.style.display = "block";
    Accounts.innerHTML = "Show Information";

    let row = main_div.insertRow();
    let cel1 = row.insertCell();
    let cel2 = row.insertCell();
    let cel3 = row.insertCell();
    let cel4 = row.insertCell();
    let cel5 = row.insertCell();
    let cel6 = row.insertCell();

    cel1.innerHTML = localStorage.getItem("product_name");
    cel2.innerHTML = localStorage.getItem("cell4");
    cel3.innerHTML = localStorage.getItem("cell2");
    cel4.innerHTML = localStorage.getItem("cell3");
    cel5.innerHTML = localStorage.getItem("cell5");
    cel6.innerHTML = localStorage.getItem("total");
  }
};

let e_1 = document.getElementsByClassName("e_1");

const db_employees = () => {
  var http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    console.log(this.response);
    if (http.readyState == 4 && http.status == 200) {
      let data = JSON.parse(this.response);
      for (let i = 0; i < data.rows.length; i++) {
        // employee_input[i].value=data.rows[0][i]
        // console.log(data.rows[0])

        let row = table_of_employees_managment.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        let cell5 = row.insertCell();
        let cell6 = row.insertCell();
        let cell7 = row.insertCell();
        let cell8 = row.insertCell();
        let remove_btn = document.createElement("button");
        remove_btn.setAttribute("id", "remove_btn");
        remove_btn.innerHTML = "-";

        cell1.innerHTML = data.rows[i][0];
        cell2.innerHTML = data.rows[i][1];
        cell3.innerHTML = data.rows[i][2];
        cell4.innerHTML = data.rows[i][3];
        cell5.innerHTML = data.rows[i][4];
        cell6.innerHTML = data.rows[i][5];
        cell7.innerHTML = data.rows[i][6];
        cell8.append(remove_btn);

        let cells = remove_btn.parentElement.parentElement;
        $(document).ready(function () {
          $(cells.lastChild).click(function () {
            cells.remove();

            let row1 = emp_leaved.insertRow();
            let cel1 = row1.insertCell();
            let cel2 = row1.insertCell();
            let cel3 = row1.insertCell();
            let cel4 = row1.insertCell();
            let cel5 = row1.insertCell();
            let cel6 = row1.insertCell();
            let cel7 = row1.insertCell();
            let cel8 = row1.insertCell();
            let remove_btn1 = document.createElement("button");
            remove_btn1.setAttribute("id", "remove_btn1");
            remove_btn1.innerHTML = "-";

            cel1.innerHTML = data.rows[i][0];
            cel2.innerHTML = data.rows[i][1];
            cel3.innerHTML = data.rows[i][2];
            cel4.innerHTML = data.rows[i][3];
            cel5.innerHTML = data.rows[i][4];
            cel6.innerHTML = data.rows[i][5];
            cel7.innerHTML = data.rows[i][6];
            cel8.append(remove_btn1);

            let main_of_tr = remove_btn1.parentElement.parentElement;
            $(document).ready(function () {
              $(main_of_tr.lastChild).click(function () {
                main_of_tr.remove();
              });
            });
          });
        });
      }
    }
  };
  http.open("GET", "http://localhost:5502/", true);
  http.send();
  console.log("There is ERROR");
};

const db_Suppliers = () => {
  var http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      let data = JSON.parse(this.response);
      for (let i = 0; i < data.rows.length; i++) {
        // employee_input[i].value=data.rows[0][i]
        // console.log(data.rows[0])

        let row = suppliers.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();

        cell1.innerHTML = data.rows[i][0];
        cell2.innerHTML = data.rows[i][1];
        cell3.innerHTML = data.rows[i][2];
      }
    }
  };
  http.open("GET", "http://localhost:5502/", true);
  http.send();
  console.log("There is ERROR");
};

const darkmode = () => {
  let darkmode = document.getElementById("darkmode");
  if (darkmode.innerHTML === "Dark") {
    document.body.style.backgroundColor = "#1c1e21";
    darkmode.innerHTML = "Light";
  } else {
    document.body.style.backgroundColor = "white";
    darkmode.innerHTML = "Dark";
  }
};
let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "???":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});

let counter = 0;

const Additems = () => {
  counter++;
  let item_name = document.getElementsByClassName("product_name");

  for (let i = 0; i < item_name.length; i++) {
    countOfItem[i].style.display = "inline-block";
    let var3 = event.target.parentElement.parentElement;
    let var4 = var3.children[1];
    let arr_items = [];
    let last_price = var4.children[4].value;
    let count = (var4.children[1].innerHTML = counter);
    if (counter < 1) {
      countOfItem[i].style.display = "none";
    }
    arr_items.push({
      name: var3.children[2].innerHTML,
      Price: last_price,
      Count: count,
    });
    sessionStorage.setItem("key_name", arr_items[i].name);
    sessionStorage.setItem("key_count", arr_items[i].Count);
    sessionStorage.setItem("key_price", arr_items[i].Price);

    products_total.value = last_price * counter;
  }
  main_table_of_products();
};

window.onload = $(document).ready(function () {
  result = localStorage.getItem("result");
  if (result === 0) {
    stat_1.innerHTML = "Sorry the box is empty please Add Items";
    tag4.href = "#";
  }
  let table = document.getElementById("table_main");
  let row = table.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();
  let cell4 = row.insertCell();
  let cell5 = row.insertCell();
  let cell6 = row.insertCell();
  let cell7 = row.insertCell();

  let btn_add = document.createElement("button");
  btn_add.innerHTML = "+";
  btn_add.setAttribute("id", "btn_add");
  cell4.append(btn_add);

  cell1.innerHTML = sessionStorage.getItem("key_name");
  let count_of_count = sessionStorage.getItem("key_count");
  cell2.innerHTML = count_of_count;
  cell3.innerHTML = sessionStorage.getItem("key_price");

  let remove = document.createElement("button");
  remove.setAttribute("id", "remove");
  ///jquery delete
  remove.innerHTML = "X";
  localStorage.setItem("cell4", cell4);
  cell7.append(remove);
  let btn_minus = document.createElement("button");
  btn_minus.setAttribute("id", "btn_minus");
  btn_minus.innerHTML = "-";
  cell5.append(btn_minus);

  $("#btn_add").click(function () {
    console.log(count_of_count);
    count_of_count++;
    cell2.innerHTML = count_of_count;
    cell6.innerHTML = cell2.innerHTML * cell3.innerHTML;
    give_cust.value = cust_give_you.value - main_Total.value;
    give_cust.addEventListener(
      "input",
      (x) => (give_cust.value = main_Total.value - cust_give_you.value)
    );
    cust_give_you.addEventListener(
      "input",
      (x) => (give_cust.value = x.target.value - main_Total.value)
    );

    main_Total.value = cell6.innerHTML;
  });

  $("#btn_minus").click(function () {
    count_of_count--;
    cell2.innerHTML = count_of_count;
    cell2.innerHTML < 1 ? cell2.parentElement.remove() : null;
    cell6.innerHTML = cell2.innerHTML * cell3.innerHTML;
    main_Total.value = cell6.innerHTML;
    cust_give_you.addEventListener(
      "input",
      (x) => (give_cust.value = x.target.value - main_Total.value)
    );

    give_cust.addEventListener(
      "input",
      (x) => (give_cust.value = main_Total.value - cust_give_you.value),
      console.log((give_cust.value = main_Total.value - cust_give_you.value))
    );
  });
  cell6.innerHTML = cell2.innerHTML * cell3.innerHTML;
  cust_give_you.addEventListener(
    "input",
    (x) => (give_cust.value = x.target.value - main_Total.value)
  );

  give_cust.addEventListener(
    "input",
    (x) => (give_cust.value = main_Total.value - cust_give_you.value)
  );

  for (let i = 0; i < row.length * 4; i++) {
    cell1.setAttribute("class", "rows");
    cell2.setAttribute("class", "rows");
    cell3.setAttribute("class", "rows");
    cell5.setAttribute("class", "rows");
    cell6.setAttribute("class", "rows");
  }

  let main_table = remove.parentElement.parentElement;
  $(main_table.lastChild).click(function () {
    main_table.remove();
  });

  main_Total.value = cell6.innerHTML;

  if (cust_give_you.value > 0) {
    give_cust.value = cust_give_you.value - main_Total.value;
    console.log(5);
  }
});

const insert_data = () => {
  for (let i = 0; i < employee_input.length; i++) {
    if (employee_input[i].value.length === 0) {
      document.body.innerHTML = "";
      document.body.style.backgroundColor = "rgb(28, 30, 33)";

      let main_div = document.createElement("div");
      let p = document.createElement("p");
      p.setAttribute("class", "back");
      document.body.append(main_div);
      main_div.append(p);
      let button = document.createElement("button");
      button.setAttribute("class", "back");
      let a = document.createElement("a");
      a.setAttribute("href", "emp_manag.html");
      button.append(a);
      a.innerHTML = "Back";
      main_div.append(button);
      p.innerHTML = "Sorry You Cannot insert null values";
    }
  }

  let row = table_of_employees_managment.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();
  let cell4 = row.insertCell();
  let cell5 = row.insertCell();
  let cell6 = row.insertCell();
  let cell7 = row.insertCell();
  let cell8 = row.insertCell();
  let remove_btn = document.createElement("button");
  remove_btn.setAttribute("id", "remove_btn");
  remove_btn.innerHTML = "-";

  cell1.innerHTML = employee_input[0].value;
  cell2.innerHTML = employee_input[1].value;
  cell3.innerHTML = employee_input[2].value;
  cell4.innerHTML = employee_input[3].value;
  cell5.innerHTML = employee_input[4].value;
  cell6.innerHTML = employee_input[5].value;
  cell7.innerHTML = employee_input[6].value;
  cell8.append(remove_btn);

  let cells = remove_btn.parentElement.parentElement;
  $(document).ready(function () {
    $(cells.lastChild).click(function () {
      cells.remove();

      let row1 = emp_leaved.insertRow();
      let cel1 = row1.insertCell();
      let cel2 = row1.insertCell();
      let cel3 = row1.insertCell();
      let cel4 = row1.insertCell();
      let cel5 = row1.insertCell();
      let cel6 = row1.insertCell();
      let cel7 = row1.insertCell();
      let cel8 = row1.insertCell();
      let remove_btn1 = document.createElement("button");
      remove_btn1.setAttribute("id", "remove_btn1");
      remove_btn1.innerHTML = "-";

      cel1.innerHTML = employee_input[0].value;
      cel2.innerHTML = employee_input[1].value;
      cel3.innerHTML = employee_input[2].value;
      cel4.innerHTML = employee_input[3].value;
      cel5.innerHTML = employee_input[4].value;
      cel6.innerHTML = employee_input[5].value;
      cel7.innerHTML = employee_input[6].value;
      cel8.append(remove_btn1);

      let main_of_tr = remove_btn1.parentElement.parentElement;
      $(document).ready(function () {
        $(main_of_tr.lastChild).click(function () {
          main_of_tr.remove();
        });
      });
    });
  });
};

let suppliers = document.getElementById("suppliers");
let input_for_suppliers = document.getElementsByClassName(
  "input_for_suppliers"
);
const insert_supplier = () => {
  for (let i = 0; i < input_for_suppliers.length; i++) {
    if (!input_for_suppliers[i].value.length) {
      document.body.innerHTML = "";
      let main_div = document.createElement("div");
      main_div.setAttribute("class", "suppliers_div");
      let p = document.createElement("p");
      p.setAttribute("class", "back");
      document.body.append(main_div);
      main_div.append(p);
      let button = document.createElement("button");
      button.setAttribute("class", "back");
      let a = document.createElement("a");
      a.setAttribute("href", "Suppliers.html");
      button.append(a);
      a.innerHTML = "Back";
      main_div.append(button);
      p.innerHTML = "Sorry You Cannot insert null values";
    }
  }
  let row = suppliers.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();

  cell1.innerHTML = input_for_suppliers[0].value;
  cell2.innerHTML = input_for_suppliers[1].value;
  cell3.innerHTML = input_for_suppliers[2].value;
};

const remove_emp_leaved = () => {
  let lists = leaved.children;
  for (let i = 0; i < lists.length; i++) {
    lists[i].innerHTML = "";
  }
};

const clear_data = () => {
  for (let i = 0; i < employee_input.length; i++) {
    employee_input[i].value = "";
  }
};

const remove_items = () => {
  if (counter < 1) {
    countOfItem[i].style.display = "none";
  }
  counter--;
  localStorage.setItem("counter-", counter);
  for (let i = 0; i < countOfItem.length; i++) {
    countOfItem[i].innerHTML = counter;
  }
};

const emptyOrNot = () => {};

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
localStorage.getItem("product_info");
