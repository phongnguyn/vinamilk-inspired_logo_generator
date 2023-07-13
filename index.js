const container = document.querySelector('.container');
const preview = document.querySelector('.preview');
const preview_btn = document.querySelector('.container .preview-btn');
const download_btn = document.querySelector('.container .download-btn')

var resize_to_fit = (text) => {
  if (text.scrollWidth > text.offsetWidth) 
    text.style.fontSize = `${(parseFloat(text.style.fontSize) - 1)}px`;
  if (text.scrollWidth > text.clientWidth) 
    return resize_to_fit(text);
  return text.style.fontSize;
}

preview_btn.addEventListener('click', () => {
  const m = document.querySelector('.main').value;
  const left = document.querySelector('.left').value;
  const right = document.querySelector('.right').value;
  const m_p = document.querySelector('.preview .main-p div');
  m_p.style.fontSize = '150px';
  const l_p = document.querySelector('.preview .left-p div');
  l_p.style.fontSize = '30px';
  const r_p = document.querySelector('.preview .right-p div');
  r_p.style.fontSize = '30px';
  preview.style.display = '';
  m_p.innerHTML = `${m}`;
  m_p.style.fontSize = resize_to_fit(m_p);
  l_p.innerHTML = `${left}`;
  l_p.style.fontSize = resize_to_fit(l_p);
  r_p.innerHTML = `${right}`;
  r_p.style.fontSize = resize_to_fit(r_p);
})

download_btn.addEventListener('click', () => {
  preview_btn.click();
  var container = document.querySelector('.preview');
  html2canvas(container, { allowTaint: true }).then(function (canvas) {

    var link = document.createElement("a");
    document.body.appendChild(link);
    m_p = document.querySelector('.preview .main-p div');
    link.download = `${m_p.innerHTML}.jpg`;
    link.href = canvas.toDataURL();
    link.target = '_blank';
    link.click();
  });
})

