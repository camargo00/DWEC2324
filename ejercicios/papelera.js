
    document.querySelector(".trash").addEventListener('click', function()
    {
        document.querySelector(".trash").style.backgroundImage="none";
        document.querySelector(".trash").style.backgroundImage="URL('https://cdn.icon-icons.com/icons2/12/PNG/256/recycling_recyclebin_empty_delete_trash_1771.png')";
        setTimeout(()=>{alert("Papelera borrada con exito")},40);
    });