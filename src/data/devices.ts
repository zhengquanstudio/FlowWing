// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus 13T",
			image: "https://img.zhengquan.org/images/2026/04/1777108768",
			specs: "Gray / 16G + 1TB",
			description:
				"Flagship performance, Hasselblad imaging, 80W SuperVOOC.",
			link: "https://www.oneplus.com/cn/13t",
		},
	],
	Router: [
		{
			name: "GL-MT3000",
			image: "https://img.zhengquan.org/images/2026/04/1777108769",
			specs: "1000Mbps / 2.5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
};
