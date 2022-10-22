let user_data = [{ name: "KHOA", phone: 123456789 }];
let ket_qua = document.getElementById('ket-qua');
// user_data.forEach(e => {
//     document.getElementById('ket-qua').innerHTML = `<div><span style="float:left">${e.name}</span><span style="float:right">${e.phone}</span></div>`;
// });
    let result = _.sortBy(user_data, function (i) { return i.name.toLowerCase(); });
    result.forEach(element => {
        let node = document.createElement("div");
        node.style.background = "gainsboro";
        node.style.margin = "10px";
        node.style.padding = "10px";
        node.style.borderRadius = "10px";
        node.innerHTML = `<span style="float:left">${element.name}</span><span style="float:right">${element.phone}</span>`;
        ket_qua.appendChild(node);
    });

document.addEventListener('DOMContentLoaded', () => {
    let btn_add = document.querySelector('#them');
    

    // console.log(btn_add);
    function them() {
        // ket_qua.innerHTML = "";
        let name_ = document.getElementById('name').value;
        let phone_ = document.getElementById('phone').value;


        user_data.push({ name: name_, phone: phone_ });

        let node = document.createElement("div");
        node.style.background = "gainsboro";
        node.style.margin = "10px";
        node.style.padding = "10px";
        node.style.borderRadius = "10px";
        node.style.position = "relative";
        node.style.animation = "mynewmove1 2s 1";
        node.innerHTML = `<span style="float:left">${name_}</span><span style="float:right">${phone_}</span>`;
        ket_qua.appendChild(node);

    }
    
    btn_add.addEventListener('click', them, false);

    

});

document.addEventListener('DOMContentLoaded', () => {
    let btn_delete_dup = document.querySelector('#dulicated-delete');
    let ket_qua = document.getElementById('ket-qua');


    function delete_dup() {

        // console.log("lenght", user_data.length);
    
        if (user_data.length > 0) {
            for (let i = 0; i < user_data.length - 1; i++) {
                // console.log('1', user_data[i].phone);
                // console.log('2', user_data[i + 1].phone);

                if (user_data[i].phone == user_data[i + 1].phone) {
                    const index = user_data.indexOf(user_data[i + 1]);
                    // console.log('index', index);
                    if (index > -1) { // only splice array when item is found
                        user_data.splice(index, 1); // 2nd parameter means remove one item only
                    }
                    i = 0;
                }

                ket_qua.innerHTML = "";

            }


            let result = _.sortBy(user_data, function (i) { return i.name.toLowerCase(); });

            // console.log("re2", result);
            result.forEach(element => {
                const node = document.createElement("div");
                node.style.background = "gainsboro";
                node.style.margin = "10px";
                node.style.padding = "10px";
                node.style.borderRadius = "10px";
                node.style.animation = "mymove 2s 1";
                node.innerHTML = `<span style="float:left">${element.name}</span><span style="float:right">${element.phone}</span>`;
                ket_qua.appendChild(node);
            });
        }


    }

    btn_delete_dup.addEventListener('click', delete_dup, false);
})

document.addEventListener('DOMContentLoaded', () => {
    let btn_search = document.querySelector('#tim');
    let ket_qua = document.getElementById('ket-qua');

    function search() {
        let array_kq = [];
        let input_search = document.querySelector('#search').value;
        if (user_data.length > 0) {
            for (let i = 0; i < user_data.length; i++) {
                // console.log("input", input_search);
                // console.log("name", user_data[i].name);
                if (user_data[i].name == input_search) {
                    array_kq.push(user_data[i]);

                }

            }
            // console.log("re3", array_kq);
            // ket_qua.removeChild();
            ket_qua.innerHTML = "";
        }
        let result = _.sortBy(array_kq, function (i) { return i.name.toLowerCase(); });
        result.forEach(element => {

            const node = document.createElement("div");
            node.style.background = "gainsboro";
            node.style.margin = "10px";
            node.style.padding = "10px";
            node.style.borderRadius = "10px";
            node.style.position = "relative";
            node.style.animation = "mynewmove 2s 1";
            node.innerHTML = `<span style="float:left">${element.name}</span><span style="float:right">${element.phone}</span>`;
            ket_qua.appendChild(node);
        });

    }

    btn_search.addEventListener('click', search, false);
})