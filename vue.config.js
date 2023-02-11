module.exports={
   /**
   * publicPath 默认是 / 是根路径，这个是指服务的根路径：https://xxx.github.io/，发布后会从这个路径下找 js.css 等资源，而生成的网站路径是这个 https://xxx.github.io/Vue-Element/，显然是找不到的
   * 我们需要修改为 相对路径'./' 或是‘.’ 或是 直接设置的项目子路径 :/项目名称/ 就可找到资源了
   */
    publicPath: './',
};