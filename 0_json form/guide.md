1. using vue js internally

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>

this integrates vue js without vue

now to integrate taliwind without node modules:
https://tailwindcss.com/docs/installation

npx tailwindcss-cli@latest build -o tailwind.css

form:
https://www.w3schools.com/jsref/event_preventdefault.asp

toggle classes js:
https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

document.getElementById('id').classList.add('class');
document.getElementById('id').classList.remove('class');
And to toggle a class (remove if exists else add it):

document.getElementById('id').classList.toggle('class');
