<template>
	<el-container>
		<el-header class="el-header">
			<router-link to="/">
				<img class="platform-logo" src="@/assets/icon/yelp_dark.svg" alt="logo">
			</router-link>
			<div class="search-wrapper">
				<el-input class="search-box" placeholder="搜索" v-model="searchValue" clearable></el-input>
				<el-button type="primary" class="search-button" @click="handleSearch">
					<el-icon>
						<Search />
					</el-icon>
					搜索
				</el-button>
			</div>
			<div class="user-wapper">
				<el-avatar icon="UserFilled" size="small" />
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						admin
						<el-icon class="el-icon--right">
							<arrow-down />
						</el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</el-header>
		<el-main></el-main>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			searchValue: ''
		};
	},
	methods: {
		handleSearch() {
			console.log('searchValue:', this.searchValue);
		}
	}
};
</script>

<style scoped>
.el-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.el-dropdown-link {
	cursor: pointer;
	color: var(--el-color-primary);
	display: flex;
	align-items: center;
	margin-left: 1vw;
}

.search-wrapper {
	display: flex;
	align-items: center;
}

.search-box {
	width: 30vw;
	margin-right: 10px;
}

.user-wapper {
	display: flex;
	align-items: center;
}
</style>