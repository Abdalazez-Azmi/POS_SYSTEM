let add_items = document.getElementById("icon");
let products_animate = document.getElementsByClassName('final')
let main_content = document.getElementsByClassName('d-1')
let products_total = document.getElementById("total");
let main_Total = document.getElementById("main_Total");
let f_p=document.getElementsByClassName('f-p')
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

const show_data = () => {
  if (sec_div.style.display !== "none") {
    sec_div.style.display = "none";
    show.innerHTML = "Show Data";
  } else {
    sec_div.style.display = "block";
    show.innerHTML = "Hide Data";
  }
};

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

  console.log(chosen_file.value);
  let slash = chosen_file.value.slice(11);
  console.log(slash)

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
  img_for_product.setAttribute("src",`Add_new_Products/${slash} `); /////////////////////

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











window.onload= $(document).ready(function(){

  for (let i = 0; i < f_p.length; i++) {
    $(f_p[i]).toggle()
    $(f_p[i]).toggle(4000)
    
  }
})





window.onload= $(document).ready(function(){

  for (let i = 0; i < main_content.length; i++) {
    $(main_content[i]).toggle()
    $(main_content[i]).toggle(4000)
    
  }
})

window.onload= $(document).ready(function(){

  for (let i = 0; i < products_animate.length; i++) {
    $(products_animate[i]).fadeOut()
    $(products_animate[i]).fadeIn(3000)
    
  }
})









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


// window.onload = function () {
//   var http = new XMLHttpRequest();

//   http.onreadystatechange = function () {
//     if (http.readyState == 4 && http.status == 200) {
//       let data = JSON.stringify(http.response);
//       let data_split = data.split("");
//       for (let i = 0; i < data_split.length; i++) {
//         if (
//           data_split[i] !== "{" &&
//           "/" &&
//           "}" &&
//           "metaData" &&
//           "rows" &&
//           "<" &&
//           ">" &&
//           "=" &&
//           ";" &&
//           "[" &&
//           "]" &&
//           "'" &&
//           '"'
//         ) {
//           let filter = data_split[i];
//           filter.split("");
//           console.log(filter);
//         }
//       }
//     }
//   };
//   http.open("GET", "http://localhost:5502/", true);
//   http.send();
// };

// let e_1 = document.getElementsByClassName('e_1')

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
      case "←":
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
  let item_name = document.getElementsByClassName("product_name");
  let var1 = document.getElementsByClassName("inp");

  let prices = [];
  for (let i = 0; i < item_name.length; i++) {
    let arr_items = [{}];
    arr_items.push({
      name: item_name[i].innerHTML,
      Price: var1[i].value,
      Count: 0,
    });
    countOfItem[i].innerHTML = 0;
    countOfItem[i].style.display = "inline-block";
    
        arr_items[i].onclick = counter++

        // countOfItem[i].innerHTML = arr_items[0].Count;
    

    prices.push(var1[i].value);
    // let result = prices[i] * counter;
    // products_total.value = result;
  }

  // localStorage.setItem("prices", prices);
  // localStorage.setItem("result", result);
  // localStorage.setItem("item_name", item_name[i].innerHTML);
  // localStorage.setItem("counter", counter);
  // console.log(item_name[i].innerHTML);
};

const main_table_of_products = () => {
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
  cell1.innerHTML = localStorage.getItem("item_name");
  cell2.innerHTML = localStorage.getItem("counter");
  cell3.innerHTML = localStorage.getItem("result");
  cell6.innerHTML = cell2.innerText * cell3.innerText;
  let btn_add = document.createElement("button");
  let btn_minus = document.createElement("button");
  let remove = document.createElement("button");
  remove.setAttribute("id", "remove");
  ///jquery delete
  remove.innerHTML = "X";
  btn_add.innerHTML = "+";
  btn_minus.innerHTML = "-";
  cell4.append(btn_add);
  cell5.append(btn_minus);
  cell7.append(remove);
  for (let i = 0; i < row.length * 4; i++) {
    cell1.setAttribute("class", "rows");
    cell2.setAttribute("class", "rows");
    cell3.setAttribute("class", "rows");
    cell4.setAttribute("class", "rows");
    cell5.setAttribute("class", "rows");
    cell6.setAttribute("class", "rows");
  }

  btn_add.setAttribute("id", "btn_add");
  btn_minus.setAttribute("id", "btn_minus");

  let main_table = remove.parentElement.parentElement;
  $(document).ready(function () {
    $(main_table.lastChild).click(function () {
      main_table.remove();
    });
  });

  $(document).ready(function () {
    $("#btn_add").click(function () {
      counters = localStorage.getItem("counter");
      counters++;
      cell2.innerHTML = counters;
      localStorage.getItem("prices");
      let prices = localStorage.getItem("prices");
      console.log(prices[0] * cell2.innerHTML);
      for (let i = 0; i < prices.length; i++) {
        cell3.innerHTML = prices[20] * cell2.innerHTML;
      }
    });
  });
  customer_money();
};

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
const customer_money = () => {
  main_Total.value = localStorage.getItem("result");
  cust_give_you.value = 2;
  give_cust.value = cust_give_you.value - main_Total.value;
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
  counter--;
  localStorage.setItem("counter-", counter);
  for (let i = 0; i < countOfItem.length; i++) {
    countOfItem[i].innerHTML = counter;
  }
  products_total.value = products_total.value - input_price * counter;
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
window.onload = main_table_of_products;
localStorage.getItem("product_info");
