


function addButtonClick(btnId) {
    let btn = $(`#${btnId}`);
    btn.on("click", () => {
        console.log("Hello World from Front");
    });
}

function ajaxToBack() {
    let data = {
        message: "Hello World",
    }
    let url = "./testback";
    $.ajax({
        url: url,
        type: "GET",
        data: data,
        dataType: "json",
        success: resp => {
            console.log(resp.message);
        }
    })
}

function addListeningEventToBtn(btnId) {

    let btn = $(`#${btnId}`);
    btn.on("click", () => {
        ajaxToBack();
    });
}

export {
    addButtonClick,
    addListeningEventToBtn,
};