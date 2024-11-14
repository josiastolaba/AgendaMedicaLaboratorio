document.addEventListener('DOMContentLoaded', () => {
    const createDoctorBtn= document.getElementById('createDoctorBtn')
    const formCrearMedico = document.getElementById('formCrearMedico')

    if (createDoctorBtn && formCrearMedico) {
        createDoctorBtn.addEventListener('click', () => {
            if (!formCrearMedico.style.display || formCrearMedico.style.display === 'none') {
                formCrearMedico.style.display = 'block';
            } else {
                formCrearMedico.style.display = 'none';
            }
        });
    }
})