#!/bin/sh

MODEL_NAME="qwen/Qwen2.5-1.5B-Instruct"
MODEL_PATH="https://www.modelscope.cn/"
TARGET_DIR="./Qwen2.5-1.5B-Instruct"
# 检查 git-lfs 是否安装
check_git_lfs() {
	if git lfs -v &> /dev/null; then
		echo "[log] git-lfs 已安装."
		return 1
	else
		echo "[log] git-lfs 未安装，正在尝试安装..."
		return 0
	fi
}

# 安装 git-lfs（支持 Arch 和 Debian/Ubuntu）
install_git_lfs() {
	if [ -f /etc/arch-release ]; then
		sudo pacman -S git-lfs
	elif [ -f /etc/debian_version ]; then
		sudo apt-get install -y git-lfs
	else
		echo "[log] 暂未支持的发行版，请尝试手动安装: https://git-lfs.com"
		exit 1
	fi
	git lfs install
}

# 下载模型
main() {
	if check_git_lfs;then
		install_git_lfs
	fi
	git clone "${MODEL_PATH}${MODEL_NAME}.git" "$TARGET_DIR"
}

main "$@"

