// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [

	{
		id: 4,
		content:
			"日记第四篇，记录美好生活",
		date: "2026-04-23 T10:30:00Z",
		images: ["/images/diary/4.png"],
	},

	{
		id: 3,
		content:
			"日记第三篇，记录美好生活",
		date: "2026-04-22 T10:30:00Z",
		images: ["/images/diary/3.png"],
	},
	
	
	{
		id: 2,
		content:
			"日记第二篇，记录美好生活",
		date: "2026-04-20 T10:30:00Z",
		images: ["/images/diary/2.png"],
	},
	
	{
		id: 1,
		content:
			"日记第一篇，记录美好生活",
		date: "2025-01-15T10:30:00Z",
		images: ["/images/diary/1.png"],
	},	
	
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};
