const loadSkills = function () {
  const skills = [
    {name: 'HTML', progress: '75', color: '#f06529'},
    {name: 'CSS', progress: '40', color: '#2965f1'},
    {name: 'Scratch', progress: '80', color: '#f7a028'},
    {name: 'Python', progress: '25', color: '#306998'},
    {name: 'JavaScript', progress: '40', color: '#f7df1e'},
  ]
  let add = '';
  console.log(skills);
  for (let i = 0; i < skills.length; i++){
    console.log(skills[i])
    add = add + '<li class="card" style="border-color: ' + skills[i].color + ';"><span class="text" style="color: ' + skills[i].color + ';">' + skills[i].name + '</span><div class="bar" style="background: ' + skills[i].color + '50;"><div class="bar2" style="width: ' + skills[i].progress + '%; background-color: ' + skills[i].color + ';"></div></div></li>'
  }
  $('#skills .skill').html(add);
}

const loadSocials = function() {
  const socials = [
    {name: 'Twitter', url: 'https://twitter.com/letb_tw', color: '#1DA1F2'},
    {name: 'GitHub', url: 'https://github.com/letbdev', color: '#333333'},
    {name: 'Scratch', url: 'https://scratch.mit.edu/users/letb_dev/', color: '#f7a028'},
    //{name: 'wasteof.money', url: 'https://wasteof.money/users/burger', color: '#6366F1'},
    //{name: 'Dribbble', url: 'https://dribbble.com/letb', color: '#EA4B89'},
    {name: 'YouTube', url: 'https://www.youtube.com/@letb', color: '#FF0000'},
    {name: 'note', url: 'https://note.com/letb/', color: '#41C9B4'},
    //{name: 'Zenn', url: 'https://zenn.dev/lb/', color: '#3EA8FF'},
    //{name: 'Qiita', url: 'https://qiita.com/letb/', color: '#55C500'},
  ]
  let add = '';
  console.log(socials);
  for (let i = 0; i < socials.length; i++){
    console.log(socials[i])
    add = add + '<a href="'+ socials[i].url + '" target="_blank" style="background: '+ socials[i].color +';"><li>' + socials[i].name +'</li></a>'
  }
  $('#socials .social').html(add);
}

$(function(){
  loadSkills();
  loadSocials();
});