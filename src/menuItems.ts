/**
 * 点餐菜单数据：通过 topCategory / subCategory 与顶部分类、左侧栏联动。
 * 图片占位符可使用 picsum 或 unsplash；此处与 UI 一致使用可访问 URL。
 */
export type MenuItem = {
  id: string;
  /** 顶部横向分类：蛋糕、意面… */
  topCategory: string;
  /** 左侧子分类：推荐、生日蛋糕… */
  subCategory: string;
  name: string;
  description: string;
  /** 单价（元） */
  price: number;
  image: string;
};

export const TOP_CATEGORIES = ["蛋糕", "意面", "披萨", "马卡龙", "咖啡", "甜品"] as const;

export const SIDEBAR_BY_TOP: Record<string, string[]> = {
  蛋糕: ["推荐", "生日蛋糕", "慕斯蛋糕", "奶油蛋糕", "芝士蛋糕", "千层蛋糕", "小蛋糕", "定制蛋糕"],
  意面: ["推荐", "直面", "焗面", "特色"],
  披萨: ["推荐", "经典", "薄底", "小食"],
  马卡龙: ["推荐", "礼盒", "单颗", "限定"],
  咖啡: ["推荐", "美式", "奶咖", "无咖啡因"],
  甜品: ["推荐", "布丁", "布丁杯", "冰淇淋"],
};

export const menuItems: MenuItem[] = [
  {
    id: "c1",
    topCategory: "蛋糕",
    subCategory: "推荐",
    name: "草莓奶油蛋糕",
    description: "烘焙的浪漫",
    price: 128,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c2",
    topCategory: "蛋糕",
    subCategory: "推荐",
    name: "梦幻蓝莓慕斯",
    description: "烘焙的浪漫",
    price: 108,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c3",
    topCategory: "蛋糕",
    subCategory: "推荐",
    name: "抹茶千层蛋糕",
    description: "烘焙的浪漫",
    price: 108,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c4",
    topCategory: "蛋糕",
    subCategory: "推荐",
    name: "提拉米苏",
    description: "烘焙的浪漫",
    price: 36,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c5",
    topCategory: "蛋糕",
    subCategory: "推荐",
    name: "巧克力熔岩蛋糕",
    description: "烘焙的浪漫",
    price: 58,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c6",
    topCategory: "蛋糕",
    subCategory: "生日蛋糕",
    name: "经典水果生日蛋糕",
    description: "鲜果与奶油层层叠加",
    price: 198,
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c7",
    topCategory: "蛋糕",
    subCategory: "生日蛋糕",
    name: "儿童卡通生日蛋糕",
    description: "可爱造型可备注",
    price: 228,
    image: "https://images.unsplash.com/photo-1535141192574-5d3787f1263c?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c8",
    topCategory: "蛋糕",
    subCategory: "慕斯蛋糕",
    name: "芒果慕斯",
    description: "清爽果香慕斯",
    price: 88,
    image: "https://images.unsplash.com/photo-1505253758473-96b701dfcd2e?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c9",
    topCategory: "蛋糕",
    subCategory: "奶油蛋糕",
    name: "北海道奶油蛋糕",
    description: "绵密奶香",
    price: 98,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c10",
    topCategory: "蛋糕",
    subCategory: "芝士蛋糕",
    name: "纽约重芝士",
    description: "浓郁芝士",
    price: 42,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305bc?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c11",
    topCategory: "蛋糕",
    subCategory: "千层蛋糕",
    name: "榴莲千层",
    description: "真果肉千层",
    price: 118,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c12",
    topCategory: "蛋糕",
    subCategory: "小蛋糕",
    name: "纸杯蛋糕组合",
    description: "一盒四枚",
    price: 48,
    image: "https://images.unsplash.com/photo-1614707267537-ab85c52d144c?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "c13",
    topCategory: "蛋糕",
    subCategory: "定制蛋糕",
    name: "来图定制蛋糕",
    description: "提前 48 小时预订",
    price: 288,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "p1",
    topCategory: "意面",
    subCategory: "推荐",
    name: "番茄肉酱意面",
    description: "经典意式风味",
    price: 38,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "p2",
    topCategory: "意面",
    subCategory: "推荐",
    name: "奶油培根意面",
    description: "奶香浓郁",
    price: 42,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "z1",
    topCategory: "披萨",
    subCategory: "推荐",
    name: "玛格丽特披萨",
    description: "番茄与芝士",
    price: 68,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "z2",
    topCategory: "披萨",
    subCategory: "经典",
    name: "夏威夷披萨",
    description: "菠萝火腿",
    price: 72,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "m1",
    topCategory: "马卡龙",
    subCategory: "推荐",
    name: "法式马卡龙礼盒",
    description: "六粒装",
    price: 88,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "f1",
    topCategory: "咖啡",
    subCategory: "推荐",
    name: "拿铁咖啡",
    description: "意式浓缩与牛奶",
    price: 28,
    image: "https://images.unsplash.com/photo-1541167760436-5f1d421f6b1f?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "f2",
    topCategory: "咖啡",
    subCategory: "奶咖",
    name: "卡布奇诺",
    description: "绵密奶泡",
    price: 26,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e01d?w=200&h=200&fit=crop&q=80",
  },
  {
    id: "d1",
    topCategory: "甜品",
    subCategory: "推荐",
    name: "焦糖布丁",
    description: "顺滑口感",
    price: 18,
    image: "https://images.unsplash.com/photo-1470324161839-1292bb6b4d36?w=200&h=200&fit=crop&q=80",
  },
];
