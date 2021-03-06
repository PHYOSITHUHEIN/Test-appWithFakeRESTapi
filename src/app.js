import { http } from './http';
import { ui } from './ui';
//Get post on DOM load
document.addEventListener('DOMContentLoaded', getPosts);
//getPosts function
function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}
