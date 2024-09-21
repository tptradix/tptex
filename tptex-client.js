function showPopup() {
    if (!document.body) {
        console.error('document.body is not available yet.');
        return;
    }

    const tptImg = document.createElement('img');
    tptImg.setAttribute('src', 'https://i.ibb.co/gJWDG6m/IMAGE-2024-09-21-19-11-36.jpg')
    tptImg.style.width = '40px';
    tptImg.style.height = '40px';

    const usdtImg = document.createElement('img');
    usdtImg.setAttribute('src', 'https://i.ibb.co/nz7yS1p/usdt.png')
    usdtImg.style.width = '55px';
    usdtImg.style.height = '55px';
    usdtImg.style.borderRadius = '10px';

    const tonImg = document.createElement('img');
    tonImg.setAttribute('src', 'https://i.ibb.co/gv9HyVD/toncoin.png')
    tonImg.style.width = '55px';
    tonImg.style.height = '55px';
    tonImg.style.borderRadius = '10px';

    const solImg = document.createElement('img');
    solImg.setAttribute('src', 'https://i.ibb.co/Tr41nfK/IMAGE-2024-09-21-20-52-04.jpg"')
    solImg.style.width = '55px';
    solImg.style.height = '55px';
    solImg.style.borderRadius = '10px';

    const svgExit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgExit.setAttribute("width", "35");
    svgExit.setAttribute("height", "35");
    svgExit.setAttribute("viewBox", "0 0 24 24");
    svgExit.setAttribute("fill", "none");

    const pathExit = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathExit.setAttribute("fill-rule", "evenodd");
    pathExit.setAttribute("clip-rule", "evenodd");
    pathExit.setAttribute("d", "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z");
    pathExit.setAttribute("fill", "#aaaaaa");

    svgExit.appendChild(pathExit);

    const svgQuest = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgQuest.setAttribute("width", "35");
    svgQuest.setAttribute("height", "35");
    svgQuest.setAttribute("viewBox", "0 0 24 24");
    svgQuest.setAttribute("fill", "none");

    const pathQuest = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathQuest.setAttribute("fill-rule", "evenodd");
    pathQuest.setAttribute("clip-rule", "evenodd");
    pathQuest.setAttribute("d", "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z");
    pathQuest.setAttribute("fill", "#aaaaaa");

    svgQuest.appendChild(pathQuest);

    const p = document.createElement('p');
    p.style.fontSize = '15px';
    p.style.fontWeight = '600';
    p.style.color = '#fff';
    p.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif";
    p.style.webkitFontSmoothing = 'inherit';

    p.innerText = 'TPT (Recomendet)'

    const p1 = document.createElement('p');
    p1.style.paddingLeft = '30px';

    p1.innerText = ' ';

    const p3 = document.createElement('p');
    p3.style.fontSize = '17px';
    p3.style.fontWeight = '800';
    p3.style.color = '#000';
    p3.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif";
    p3.style.webkitFontSmoothing = 'inherit';

    p3.innerText = 'or'

    const p4 = document.createElement('p');
    p4.style.fontSize = '15px';
    p4.style.fontWeight = '600';
    p4.style.color = '#000';
    p4.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif";
    p4.style.webkitFontSmoothing = 'inherit';

    p4.innerText = 'Tether'

    const p5 = document.createElement('p');
    p5.style.fontSize = '15px';
    p5.style.fontWeight = '600';
    p5.style.color = '#000';
    p5.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif";
    p5.style.webkitFontSmoothing = 'inherit';

    p5.innerText = 'Toncoin'

    const p6 = document.createElement('p');
    p6.style.fontSize = '15px';
    p6.style.fontWeight = '600';
    p6.style.color = '#000';
    p6.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif";
    p6.style.webkitFontSmoothing = 'inherit';

    p6.innerText = 'Solana'

    const h1 = document.createElement('h1');
    h1.style.fontSize = '20px';
    h1.style.fontWeight = '700';
    h1.style.color = '#000';
    h1.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif";
    h1.style.webkitFontSmoothing = 'inherit';

    h1.innerText = 'Instant payment form'

    const span = document.createElement('h1');
    span.style.fontSize = '14px';
    span.style.fontWeight = '500';
    span.style.color = '#aaaaaa';
    span.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif";
    span.style.webkitFontSmoothing = 'inherit';

    span.innerText = 'Choose your preferred deposit method'
    
    const popup = document.createElement('div');
    popup.style.width = '100vw';
    popup.style.height = '100vh';
    popup.style.position = 'fixed';
    popup.style.bottom = '0';
    popup.style.left = '0';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    popup.style.color = '#fff';
    popup.style.display = 'flex';
    popup.style.alignItems = 'end';
    
    const content = document.createElement('div');
    content.style.position = 'fixed';
    content.style.width = '100%';
    content.style.height = '400px';
    content.style.color = '#000';
    content.style.display = 'flex';
    content.style.bottom = '-400px';
    content.style.alignItems = 'baseline';
    content.style.justifyContent = 'center';
    content.style.background = '#f0f0f0';
    content.style.borderTopLeftRadius = '20px';
    content.style.borderTopRightRadius = '20px';
    content.style.transition = 'bottom 0.3s ease';
    
    const dataContent = document.createElement('div');
    dataContent.style.width = '100%';
    dataContent.style.display = 'grid';
    dataContent.style.background = '#fff';
    dataContent.style.borderRadius = '20px';
    dataContent.style.paddingTop = '20px';
    dataContent.style.paddingLeft = '15px';
    dataContent.style.paddingRight = '15px';
    dataContent.style.gap = '20px';
    dataContent.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';

    const div1 = document.createElement('div');
    div1.style.width = '100%';
    div1.style.display = 'flex';
    div1.style.justifyContent = 'space-between';

    const div2 = document.createElement('div');
    div2.style.display = 'grid';
    div2.style.justifyContent = 'center';
    div2.style.textAlign = 'center';

    const div3 = document.createElement('div');
    div3.style.display = 'flex';
    div3.style.justifyContent = 'space-between';
    div3.style.alignItems = 'center';
    div3.style.textAlign = 'center';
    div3.style.borderRadius = '10px';
    div3.style.background = '#4387f6';
    div3.style.height = '45px';
    div3.style.padding = '5px';

    const div4 = document.createElement('div');
    div4.style.textAlign = 'center';

    const div5 = document.createElement('div');
    div5.style.display = 'flex';
    div5.style.justifyContent = 'space-between';
    div5.style.alignItems = 'center';
    div5.style.padding = '5px';

    const div6 = document.createElement('div');
    div6.style.display = 'grid';
    div6.style.justifyContent = 'center';
    div6.style.alignItems = 'center';
    div6.style.padding = '5px';

    const div7 = document.createElement('div');
    div7.style.display = 'flex';
    div7.style.justifyContent = 'center';
    div7.style.alignItems = 'center';

    const div8 = document.createElement('div');
    div8.style.display = 'flex';
    div8.style.justifyContent = 'center';
    div8.style.alignItems = 'center';

    const div9 = document.createElement('div');
    div9.style.display = 'grid';
    div9.style.justifyContent = 'center';
    div9.style.alignItems = 'center';
    div9.style.padding = '5px';

    const div10 = document.createElement('div');
    div10.style.display = 'flex';
    div10.style.justifyContent = 'center';
    div10.style.alignItems = 'center';

    const div11 = document.createElement('div');
    div11.style.display = 'flex';
    div11.style.justifyContent = 'center';
    div11.style.alignItems = 'center';

    const div12 = document.createElement('div');
    div12.style.display = 'grid';
    div12.style.justifyContent = 'center';
    div12.style.alignItems = 'center';
    div12.style.padding = '5px';

    const div13 = document.createElement('div');
    div13.style.display = 'flex';
    div13.style.justifyContent = 'center';
    div13.style.alignItems = 'center';

    const div14 = document.createElement('div');
    div14.style.display = 'flex';
    div14.style.justifyContent = 'center';
    div14.style.alignItems = 'center';
    
    
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            content.style.bottom = '-400px';
            popup.style.background = 'transparent'
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 500);
        }
    });

    div1.appendChild(svgQuest);
    div1.appendChild(svgExit);
    div2.appendChild(h1);
    div2.appendChild(span);
    div3.appendChild(tptImg);
    div3.appendChild(p);
    div3.appendChild(p1);
    div4.appendChild(p3);
    div5.appendChild(div6);
    div5.appendChild(div9);
    div5.appendChild(div12);
    div7.appendChild(usdtImg);
    div8.appendChild(p4);
    div6.appendChild(div7);
    div6.appendChild(div8);
    div10.appendChild(tonImg);
    div11.appendChild(p5);
    div9.appendChild(div10);
    div9.appendChild(div11);
    div13.appendChild(solImg);
    div14.appendChild(p6);
    div12.appendChild(div13);
    div12.appendChild(div14);
    dataContent.appendChild(div1);
    dataContent.appendChild(div2);
    dataContent.appendChild(div3);
    dataContent.appendChild(div4);
    dataContent.appendChild(div5);
    content.appendChild(dataContent);
    popup.appendChild(content);
    document.body.appendChild(popup);

    setTimeout(() => {
        content.style.bottom = '0';
    }, 100);
}
