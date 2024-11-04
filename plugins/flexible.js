export default defineNuxtPlugin((nuxtApp) => {
    const resetFontSize = () => {
      const size = (document.documentElement.clientWidth / 750) * 12;
      document.documentElement.style.fontSize = size + 'px';
      document.body.style.visibility = 'visible';
    };
  
    // 在组件销毁时移除事件监听
    nuxtApp.hook('app:mounted', () => {
      resetFontSize(); // 初始调用
      window.addEventListener('resize', resetFontSize); // 添加监听器
      window.addEventListener('pageshow', resetFontSize); // 添加监听器
    });
  
    nuxtApp.hook('app:beforeUnmount', () => {
      window.removeEventListener('pageshow', resetFontSize);
      window.removeEventListener('resize', resetFontSize);
    });
  });
  