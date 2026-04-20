function openWhatsApp() {
    const phone   = '491724057496';
    const message = encodeURIComponent(
        'Hola Marcel! Te contacto desde tu perfil de Instagram. ' +
        'Me gustaría saber más sobre tus servicios de desarrollo web.'
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
}
