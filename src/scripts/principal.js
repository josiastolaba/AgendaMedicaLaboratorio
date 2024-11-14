document.addEventListener('DOMContentLoaded', () => {
    const abrirPersona = document.getElementById('abrirPersona');
    const formPersona = document.getElementById('formPersona');
    
    if (abrirPersona && formPersona) {
        abrirPersona.addEventListener('click', () => {
            if (!formPersona.style.display || formPersona.style.display === 'none') {
                formPersona.style.display = 'block';
            } else {
                formPersona.style.display = 'none';
            }
        });
    }
});