// Drawer state is independent of the camera and never changes the saved village.
const upgradeToggle=$('upgradeToggle'),upgradeBody=$('upgradeBody');
function measureDrawer(){const panel=upgradeToggle.closest('.bottom');document.documentElement.style.setProperty('--upgrade-height',Math.ceil(panel.getBoundingClientRect().height)+'px');dispatchEvent(new CustomEvent('layout-change'));}
upgradeToggle.onclick=()=>{const open=upgradeToggle.getAttribute('aria-expanded')!=='true';upgradeToggle.setAttribute('aria-expanded',String(open));upgradeBody.hidden=!open;upgradeToggle.querySelector('.drawerAction').firstChild.textContent=open?'Close ':'Open ';measureDrawer();};
if(typeof ResizeObserver!=='undefined')new ResizeObserver(measureDrawer).observe(upgradeToggle.closest('.bottom'));
addEventListener('resize',measureDrawer);measureDrawer();
