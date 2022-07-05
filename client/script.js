const submitBtn = document.getElementById('submit-btn');


function getTime() {
    const now = new Date();
    const options1 = {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
        weekday: 'long',
        day: 'numeric',
        month: 'long', 
        year: 'numeric',
    };

    return new Intl.DateTimeFormat('en-GB', options1).format(now);
}


submitBtn.addEventListener('click', async (e) => {
    
    e.preventDefault();
    const categoryData = document.getElementById('category-input').value;  
    const storyData = document.getElementById('story-input').value;
    

    
    let postIDnumber = 0;
    await fetch('http://localhost:5000/api/posts/relationships')
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(array => array.posts)
    .then(array => {
        postIDnumber = array.length + 1;
    })

    let newObject = {
        time: getTime(),
        postID: postIDnumber, 
        category: categoryData, 
        story: storyData, 
        comments: [], 
        reactions: {fire: 0,
                    thumbs: 0,
                     smiley: 0},
        gifs: '',
    }
    await fetch('http://localhost:5000/api/posts/relationships', {
        method: 'POST',
        body: JSON.stringify(newObject), 
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
    
})
    
    