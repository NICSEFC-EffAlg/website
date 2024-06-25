# 使用教程

网站地址 http://nics-effalg.com/

在github仓库 https://github.com/NICSEFC-EffAlg/website 提交pull request，管理员审核后merge到main分支后更新网站。

### 添加publication

修改`_data/pubs.yml`

### 添加people

修改`_data/people.yml`

注意，project需要使用展示图片，可以写图床链接，也可以上传一张image到`assets/people_images`文件夹，写`image: /assets/people_images/<image_name>`。
为了保证访问速度，请确保图片大小<500KB，推荐使用jpg压缩。

### 添加首页highlight

修改`_data/highlights.yml`

# 本地运行指南

- 如果在国内，要挂代理哦，软件都要外网！
- 安装 jekyll，安装教程 `https://jekyllrb.com/docs/installation/`.
- 注释中`Gemfile`中的 `gem "github-pages", group: :jekyll_plugins`
- 注释`_config.yml`中的`remote_theme: "mmistakes/minimal-mistakes@4.26.2"`
- 取消注释`_config.yml`中的`theme: minimal-mistakes-jekyll`
- 运行`bundle install`
- 运行`jekyll serve --watch`

注意！修改完代码之后，不要把修改后的`Gemfile`和`_config.yml`上传，否则githubio不能正常编译。