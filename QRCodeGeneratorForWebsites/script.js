let imgBox = document.getElementById('imgBox');
let qrImag = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
let errorMessage = document.getElementById('errorMessage');

function generateQR() {
    if (qrText.value.trim().length === 0) { 
        qrText.classList.add('error');
        errorMessage.style.display = 'block'; 
        setTimeout(() => {
            qrText.classList.remove('error');
            errorMessage.style.display = 'none'; 
        }, 1500)
    } else {
        qrImag.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add('show-img');
    }
}
