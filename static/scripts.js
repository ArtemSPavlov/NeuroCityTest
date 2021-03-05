document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-button');

    function deleteHandler(){
        fetch(`/?userId=${this.dataset.userId}`, {
        method: 'DELETE'
        })
        .then(() => {
            location.reload()
        });

    }

    if(deleteButtons){
        deleteButtons.forEach(el => el.addEventListener('click', deleteHandler))
    }

})