window.onload = function() {
    const text = this.document.querySelectorAll('#animate-text path')

    for(let i = 0; i < text.length; i++) {
        console.log(`Letter ${i} is ${text[i].getTotalLength()} long`)
    }
}