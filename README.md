# 使用教程

网站地址 http://nics-effalg.com/

在github仓库 https://github.com/NICSEFC-EffAlg/website 提交pull request，管理员审核后merge到main分支后更新网站。

### 添加publication

修改`_data/pubs.yml`

### 添加people

修改`_data/people.yml`

注意，project需要使用展示图片，可以写图床链接，也可以上传一张image到`assets/people_images`文件夹，写`image: /assets/people_images/<image_name>`。
为了保证访问速度，请确保图片大小<500KB，推荐使用jpg压缩。

### 添加首页project

修改`_data/projects.yml`

注意，project需要使用展示图片，可以写图床链接，也可以上传一张image到`assets/project_images`文件夹，写`image: /assets/project_images/<image_name>`。
为了保证访问速度，请确保图片大小<500KB，推荐使用jpg压缩。

### 添加首页highlight

修改`_data/highlights.yml`

# Run Local

Install jekyll `https://jekyllrb.com/docs/installation/`.

```
jekyll serve --watch
```