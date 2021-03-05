document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-button');
    const editForm = document.querySelector('#edit-form');

    function deleteHandler(){
        fetch(`/?postId=${this.dataset.userId}`, {
        method: 'DELETE'
        })
        .then(() => {
            location.reload()
        });

    }

    if(deleteButtons){
        deleteButtons.forEach(el => el.addEventListener('click', deleteHandler))
    }

    if(editForm){
        editForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = {
                    userId: this.elements.userId.value.trim(),
                    title: this.elements.title.value.trim(),
                    body: this.elements.body.value.trim()
                }

            fetch(this.getAttribute('action'), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(formData)
                })
                .then((data) => {
                    if(data.status == '200'){
                        location.href = '/';
                    }
            });
        })
    }

})