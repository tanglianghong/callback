# 使用官方的 Node.js 镜像作为基础镜像
FROM node:20

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install --production

# 将应用的其他文件复制到工作目录
COPY . .

# 暴露应用运行的端口（例如 3000）
EXPOSE 3000

# 启动应用的命令
CMD ["node", "server.js"]