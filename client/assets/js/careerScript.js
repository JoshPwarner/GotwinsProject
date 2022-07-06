const submitBtnCareer = document.getElementById('submit-button-careers');

function getTime() {
    const now = new Date();
    const options1 = {
        hour: 'numeric',
        hour12: false,
        minute: 'numeric',
        weekday: 'long',
        day: 'numeric',
        month: 'long', 
        year: 'numeric',
    };

    return new Intl.DateTimeFormat('en-GB', options1).format(now);
}


function fetchPosts() {
    fetch('http://localhost:5000/api/posts/career')
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(result => {
        result.posts.forEach(item => {
                    let timeBox = item.time;
                    let postIdBox = item.postID;
                    let categoryBox = item.category;
                    let storyBox = item.story;
                    let commentsBox = item.comments;
                    let reactionsBox = item.reactions;
                    let gifsBox = item.gifs;
                    if (commentsBox.length === 0) {
                        let newDiv = document.createElement('div');
                            let overallPost = `<section class="post">
                            <div class="date">
                                <div class="avatar">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <p class="date-text">${timeBox}</p>
                            </div>
                            <div class="post-content">
                                <p>${storyBox}</p>
                            </div>
                            <hr class="divider" />
                            <div class="emoji">
                                <button class="button add-emoji"><i class="fa-regular fa-face-grin"></i></button>
                            </div>
                            <div class="add-comment">
                                <div class="form-box">
                                    <div class="avatar">
                                        <i class="fa-solid fa-user"></i>
                                    </div>
                                    <form class="new-post-form">
                                        <textarea
                                            name="new-post"
                                            id="new-post-career-${postIdBox}"
                                            cols="30"
                                            rows="2"
                                            placeholder="Add a comment..."
                                            required
                                        ></textarea>
                                        <div class="buttons">
                                            <button id="submit-btn-${postIdBox}" class="button submit" type="submit">Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="comments">
                                <div id="comment-container-career-${postIdBox}" class="comment-container">
                                    
                                </div>
                            </div>
                        </section>`
                        newDiv.innerHTML = overallPost;
                        newDiv.style.margin = '2rem 0 2rem 0';
                        document.getElementById('posts-container-career').insertAdjacentElement('afterbegin', newDiv);
                        
                        document.getElementById(`submit-btn-${postIdBox}`).addEventListener('click', (e) => {
                            e.preventDefault();
                            if (document.getElementById(`new-post-career-${postIdBox}`).value !== '') {
                                console.log(document.getElementById(`new-post-career-${postIdBox}`).value);
                                let url = 'http://localhost:5000/api/posts/career/';
                                url += postIdBox;
                                url += '/comments'
                                let commentValue = document.getElementById(`new-post-career-${postIdBox}`).value;
                                fetch(url, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        comment: commentValue, 
                                        postID: postIdBox,
                                    })

                                })
                            } else {
                                alert('Please input something to post');
                            }
                            
                        })
                    } else {
                        let newDiv = document.createElement('div');
                            let overallPost = `<section class="post">
                            <div class="date">
                                <div class="avatar">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <p class="date-text">${timeBox}</p>
                            </div>
                            <div class="post-content">
                                <p>${storyBox}</p>
                            </div>
                            <hr class="divider" />
                            <div class="emoji">
                                <button class="button add-emoji"><i class="fa-regular fa-face-grin"></i></button>
                            </div>
                            <div class="add-comment">
                                <div class="form-box">
                                    <div class="avatar">
                                        <i class="fa-solid fa-user"></i>
                                    </div>
                                    <form class="new-post-form">
                                        <textarea
                                            name="new-post"
                                            id="new-post-career-${postIdBox}"
                                            cols="30"
                                            rows="2"
                                            placeholder="Add a comment..."
                                            required
                                        ></textarea>
                                        <div class="buttons">
                                            <button id="submit-btn-${postIdBox}" class="button submit" type="submit">Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="comments">
                                <div id="comment-container-career-${postIdBox}" class="comment-container">
                                    
                                </div>
                            </div>
                        </section>`
                        newDiv.innerHTML = overallPost;
                        newDiv.style.margin = '2rem 0 2rem 0';
                        document.getElementById('posts-container-career').insertAdjacentElement('afterbegin', newDiv);
                        commentsBox.forEach(each => {
                            let newCommentDiv = document.createElement('div');
                            newCommentDiv.innerHTML = `<div class="avatar">
                                                    <i class="fa-solid fa-user"></i>
                                                </div>
                                                <p class="comment-text">${each}</p>`
                            newCommentDiv.style.display = 'flex';
                            newCommentDiv.style.alignItems = 'center';
                            document.getElementById(`comment-container-career-${postIdBox}`).style.display = 'flex';
                            document.getElementById(`comment-container-career-${postIdBox}`).insertAdjacentElement('beforeend', newCommentDiv)
                            // document.querySelectorAll('.comment-text').style.margin = "0 0 0 1rem";
                            
                        })
                        document.getElementById(`comment-container-career-${postIdBox}`).style.display = 'flex';
                        document.getElementById(`comment-container-career-${postIdBox}`).style.flexDirection = 'column';
                        document.getElementById(`comment-container-career-${postIdBox}`).style.alignItems = 'flex-start';

                        document.getElementById(`submit-btn-${postIdBox}`).addEventListener('click', (e) => {
                            e.preventDefault();
                            if (document.getElementById(`new-post-career-${postIdBox}`).value !== '') {
                                console.log(document.getElementById(`new-post-career-${postIdBox}`).value);
                                let url = 'http://localhost:5000/api/posts/career/';
                                url += postIdBox;
                                url += '/comments'
                                let commentValue = document.getElementById(`new-post-career-${postIdBox}`).value;
                                fetch(url, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        comment: commentValue, 
                                        postID: postIdBox,
                                    })

                                })
                            } else {
                                alert('Please input something to post');
                            }
                            
                        })
                            }
                            
                        })
                
            })
        
             
}
    



fetchPosts();

submitBtnCareer.addEventListener('click', async (e) => {
    e.preventDefault();  
    const storyData = document.getElementById('new-post-career').value;
    console.log(storyData);
    let postIDnumber = 0;
    await fetch('http://localhost:5000/api/posts/career')
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(array => array.posts)
    .then(array => {
        postIDnumber = array.length + 1;
    })

    let newObject = {
        time: getTime(),
        postID: postIDnumber, 
        category: 'career', 
        story: storyData, 
        comments: [], 
        reactions: {fire: 0,
                    thumbs: 0,
                     smiley: 0},
        gifs: '',
    }

    console.log(newObject);
    await fetch('http://localhost:5000/api/posts/career', {
        method: 'POST',
        body: JSON.stringify(newObject), 
        headers: {
            'Content-Type': 'application/json'
        },
        
    })


})