/* Metin2 weapon data
 * @author Son Gohan (son.gohan.mt2@gmail.com)
 * @license GNU GPL v3
 */
 
if(!tacgGlobals)
	var tacgGlobals = {};
	var myImage = new Image(100, 200)
if(!tacgGlobals.weapons) 
	tacgGlobals.weapons = {
		growth: function (wea, up) {
			if(!wea || !wea.atkmin) return 0;
			return wea.atkmin[up] - wea.atkmin[0];
		},

		'غلايف': {
			level: '1',
			atkmin: [14, 22, 30, 38, 46, 54, 62, 70, 78, 86],
			atkmax: [22, 30, 38, 46, 54, 62, 70, 78, 86, 94],
			atkspeed: [26, 26, 26, 26, 26, 26, 26, 26, 26, 26],
			type: 'twohanded'
			
		},
		'رمح': {
			level: '5',
			atkmin: [23, 31, 39, 47, 55, 63, 71, 79, 87, 95],
			atkmax: [33, 41, 49, 57, 65, 73, 81, 89, 97, 105],
			atkspeed: [28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
			type: 'twohanded'
		},
		'شفرة قطع الرأس': {
			level: '10',
			atkmin: [24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
			atkmax: [42, 50, 58, 66, 74, 82, 90, 98, 106, 114],
			atkspeed: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
			type: 'twohanded'
		},
		'رمح عنكبوتي': {
			level: '15',
			atkmin: [30, 38, 46, 54, 62, 70, 78, 86, 94, 102],
			atkmax: [44, 52, 60, 68, 76, 84, 92, 100, 108, 116],
			atkspeed: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
			type: 'twohanded'
		},
		'رمح ذو رأسين': {
			level: '20',
			atkmin: [34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			atkmax: [52, 60, 68, 76, 84, 92, 100, 108, 116, 124],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'twohanded'
		},
		'منجل حربي': {
			level: '25',
			atkmin: [52, 58, 64, 70, 76, 84, 93, 103, 114, 126],
			atkmax: [86, 92, 98, 104, 110, 118, 127, 137, 148, 160],
			atkspeed: [27, 27, 27, 27, 27, 27, 27, 27, 27, 27],
			type: 'twohanded'
		},
		'شفرة حديدية حمراء': {
			level: '30',
			atkmin: [72, 78, 83, 89, 94, 102, 110, 120, 130, 142],
			atkmax: [109, 115, 120, 126, 131, 139, 147, 157, 167, 179],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'twohanded'
		},
		'معزقة قتالية': {
			level: '32',
			atkmin: [58, 64, 70, 76, 82, 90, 99, 109, 120, 132],
			atkmax: [88, 94, 100, 106, 112, 120, 129, 139, 150, 162],
			atkspeed: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
			type: 'twohanded'
		},
		'ساطور حربي': {
			level: '36',
			atkmin: [60, 66, 72, 78, 84, 92, 101, 111, 122, 134],
			atkmax: [96, 102, 108, 114, 120, 128, 137, 147, 158, 170],
			atkspeed: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
			type: 'twohanded'
		},
		'فأس عملاق': {
			level: '40',
			atkmin: [69, 75, 81, 87, 93, 101, 110, 120, 131, 143],
			atkmax: [103, 109, 115, 121, 127, 135, 144, 154, 165, 177],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'twohanded'
		},
		'سيف جليدي': {
			level: '45',
			atkmin: [84, 89, 94, 99, 104, 111, 119, 128, 138, 149],
			atkmax: [122, 127, 132, 137, 142, 149, 157, 166, 176, 187],
			atkspeed: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
			type: 'twohanded'
		},
		'سيف الاثني عشر شبح': {
			level: '50',
			atkmin: [85, 90, 95, 100, 105, 112, 120, 129, 139, 150],
			atkmax: [139, 144, 149, 154, 159, 166, 174, 183, 193, 204],
			atkspeed: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
			type: 'twohanded'
		},
		'شفرة النجاة': {
			level: '55',
			atkmin: [86, 91, 96, 101, 106, 113, 121, 130, 140, 151],
			atkmax: [154, 159, 164, 169, 174, 181, 189, 198, 208, 219],
			atkspeed: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
			type: 'twohanded'
		},
		'قاتل الأسد': {
			level: '60',
			atkmin: [102, 107, 112, 117, 122, 129, 137, 146, 156, 167],
			atkmax: [156, 161, 166, 171, 176, 183, 191, 200, 210, 221],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'twohanded'
		},
		'شفرة مغناطيسية': {
			level: '65',
			atkmin: [126, 132, 139, 174, 156, 166, 177, 189, 202, 216],
			atkmax: [194, 200, 207, 242, 224, 234, 245, 257, 270, 284],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
			type: 'twohanded'
		},
		'النصير': {
			level: '65',
			atkmin: [136, 144, 153, 163, 174, 186, 199, 213, 238, 273],
			atkmax: [184, 192, 201, 211, 222, 234, 247, 261, 286, 321],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'twohanded'
		},
		'شفرة سرقة الروح': {
			level: '70',
			atkmin: [126, 134, 143, 153, 164, 176, 189, 203, 228, 263],
			atkmax: [194, 202, 211, 221, 232, 244, 257, 271, 296, 331],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'twohanded'
		},
		'سيف الحقد': {
			level: '75',
			atkmin: [136, 142, 149, 157, 166, 176, 187, 199, 212, 226],
			atkmax: [184, 190, 197, 205, 214, 224, 235, 247, 260, 274],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
			type: 'twohanded'
		},
		'نصل شمسي': {
			level: '87-105',
			atkmin: [203, 237, 240, 246, 254, 267, 285, 313, 335, 417],
			atkmax: [311, 318, 321, 327, 335, 348, 366, 394, 416, 498],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'twohanded'
		},
		
		'شفرة التنين الظلامي': {
			level: '96',
			atkmin: [226, 236, 239, 245, 253, 266, 284, 312, 344, 406, 436, 451, 446, 481, 496, 526 ],
			atkmax: [314, 324, 327, 333, 341, 354, 372, 400, 432, 494, 528, 543, 558, 573, 588, 618],
			atkspeed: [15, 15, 16, 16, 17, 17, 18, 18, 18, 20, 21, 22, 24, 25, 27, 30],
			type: 'twohanded'
		},
		
		'شفرة الكيانيت': {
			level: '105-115',
			atkmin: [341, 346, 350, 354, 357, 362, 366, 372, 401, 458],
			atkmax: [424, 429, 433, 437, 440, 445, 454, 460, 489, 546],
			atkspeed: [15, 16, 17, 18, 19, 20, 22, 24, 27, 30],
			type: 'twohanded'
		},
		'نصل زودياك': {
			level: '105',
			atkmin: [341, 346, 350, 354, 357, 362, 366, 372, 401, 458],
			atkmax: [424, 429, 433, 437, 440, 445, 454, 460, 489, 546],
			atkspeed: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
			type: 'twohanded'
		},
	
		
		'سيف': {
			level: '1',
			atkmin: [13, 20, 27, 34, 41, 48, 55, 62, 69, 76],
			atkmax: [15, 22, 29, 36, 43, 50, 57, 64, 71, 78],
			atkspeed: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
			type: 'sword'
		},
		'سيف طويل': {
			level: '5',
			atkmin: [15, 22, 29, 36, 43, 50, 57, 64, 71, 78],
			atkmax: [19, 26, 33, 40, 47, 54, 61, 68, 75, 82],
			atkspeed: [27, 27, 27, 27, 27, 27, 27, 27, 27, 27],
			type: 'sword'
		},
		'سيف منجلي': {
			level: '10',
			atkmin: [20, 27, 34, 41, 48, 55, 62, 69, 76, 83],
			atkmax: [24, 31, 38, 45, 52, 59, 66, 73, 80, 87],
			atkspeed: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
			type: 'sword'
		},
		'سيف خيزراني': {
			level: '15',
			atkmin: [22, 29, 36, 43, 50, 57, 64, 71, 78, 85],
			atkmax: [26, 33, 40, 47, 54, 61, 68, 75, 82, 89],
			atkspeed: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
			type: 'sword'
		},
		'سيف عريض': {
			level: '20',
			atkmin: [25, 32, 39, 46, 53, 60, 67, 74, 81, 88],
			atkmax: [35, 42, 49, 56, 63, 70, 77, 84, 91, 98],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sword'
		},
		'سيف فضي': {
			level: '25',
			atkmin: [36, 42, 48, 54, 60, 68, 76, 97, 98, 109],
			atkmax: [46, 52, 58, 64, 70, 78, 86, 107, 108, 119],
			atkspeed: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
			type: 'sword'
		},
		'سيف بدري': {
			level: '30',
			atkmin: [57, 63, 68, 74, 79, 87, 95, 105, 115, 127],
			atkmax: [73, 79, 84, 90, 95, 103, 111, 121, 131, 143],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sword'
		},
		'سيف أورشيدي': {
			level: '32',
			atkmin: [38, 44, 50, 56, 62, 70, 79, 89, 100, 112],
			atkmax: [52, 58, 64, 70, 76, 84, 93, 103, 114, 126],
			atkspeed: [27, 27, 27, 27, 27, 27, 27, 27, 27, 27],
			type: 'sword'
		},
		'سيف شاذ': {
			level: '36',
			atkmin: [48, 54, 60, 66, 72, 80, 89, 99, 110, 122],
			atkmax: [58, 64, 70, 76, 82, 90, 99, 109, 120, 132],
			atkspeed: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
			type: 'sword'
		},
		'سيف بربري': {
			level: '40',
			atkmin: [52, 58, 64, 70, 76, 84, 93, 103, 114, 126],
			atkmax: [68, 74, 80, 86, 92, 100, 109, 119, 130, 142],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sword'
		},
		'سيف دموي': {
			level: '45',
			atkmin: [65, 70, 75, 80, 85, 92, 100, 109, 119, 130],
			atkmax: [87, 92, 97, 102, 107, 114, 122, 131, 141, 152],
			atkspeed: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
			type: 'sword'
		},
		'سيف كبير': {
			level: '50',
			atkmin: [69, 74, 79, 84, 89, 96, 104, 113, 123, 134],
			atkmax: [91, 96, 101, 106, 111, 118, 126, 135, 145, 156],
			atkspeed: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
			type: 'sword'
		},
		'سيف سحري': {
			level: '55',
			atkmin: [74, 79, 84, 89, 94, 101, 109, 118, 128, 139],
			atkmax: [100, 105, 110, 115, 120, 26, 135, 144, 154, 165],
			atkspeed: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
			type: 'sword'
		},
		'سيف هلالي': {
			level: '60',
			atkmin: [72, 77, 82, 87, 82, 99, 107, 116, 126, 137],
			atkmax: [108, 113, 118, 123, 118, 135, 143, 152, 162, 173],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sword'
		},
		'سيف نمفي': {
			level: '65',
			atkmin: [102, 108, 115, 123, 132, 142, 153, 165, 178, 192],
			atkmax: [138, 144, 151, 159, 168, 178, 189, 201, 214, 228],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
			type: 'sword'
		},
		'سيف معركي': {
			level: '65',
			atkmin: [100, 108, 117, 127, 138, 150, 163, 177, 202, 237],
			atkmax: [140, 148, 157, 167, 178, 190, 203, 217, 242, 277],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sword'
		},
		'سيف لادغ': {
			level: '70',
			atkmin: [102, 108, 115, 123, 132, 142, 153, 165, 178, 192],
			atkmax: [138, 144, 151, 159, 168, 178, 189, 201, 214, 228],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sword'
		},
		'سيف سام': {
			level: '75',
			atkmin: [100, 108, 117, 127, 138, 150, 163, 177, 202, 237],
			atkmax: [140, 148, 157, 167, 178, 190, 203, 217, 242, 277],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
			type: 'sword'
		},
		'سيف تريتون': {
			level: '80-90',
			atkmin: [237, 238, 240, 244, 249, 255, 262, 270, 280, 290],
			atkmax: [277, 278, 280, 284, 289, 295, 301, 308, 316, 325],
			atkspeed: [15, 15, 16, 17, 18, 20, 22, 24, 27, 30],
			type: 'sword'
		},
		'سيف خفي': {
			level: '87-105',
			atkmin: [153, 163, 167, 175, 186, 203, 227, 267, 320, 403],
			atkmax: [207, 217, 221, 229, 240, 257, 281, 321, 374, 457],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sword'
		},
		'سيف التنين الظلامي': {
			level: '96',
			atkmin: [135, 148, 152, 159, 169, 180, 205, 247, 272, 344, 359, 374, 389, 404, 419, 449 ],
			atkmax: [214, 227, 231, 238, 248, 259, 284, 326, 351, 423, 442, 457, 472, 487, 502, 532],
			atkspeed: [15, 15, 16, 16, 17, 17, 18, 18, 18, 20, 21, 22, 24, 25, 27, 30],
			type: 'sword'
		},
		'سيف زودياك': {
			level: '105',
			atkmin: [149, 157, 160, 166, 175, 189, 208, 237, 282, 349],
			atkmax: [211, 219, 222, 228, 237, 251, 270, 299, 344, 411],
			atkspeed: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
			type: 'sword'
		},
		'سيف تعويذي': {
			level: '65',
			atkmin: [98, 104, 111, 119, 128, 138, 149, 161, 174, 188],
			atkmax: [142, 148, 155, 163, 172, 182, 193, 205, 218, 232],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sura-sword'
		},
		'شفرة الشبح النابية': {
			level: '65',
			atkmin: [77, 82, 87, 96, 105, 113, 119, 123, 131, 142],
			atkmax: [139, 144, 149, 158, 167, 175, 181, 185, 193, 204],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sura-sword'
		},
		'شفرة الشيطان': {
			level: '70',
			atkmin: [77, 80, 83, 90, 97, 103, 107, 109, 105, 95],
			atkmax: [139, 142, 145, 152, 159, 165, 169, 171, 167, 157],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sura-sword'
		},
		'سيف الأسد': {
			level: '75',
			atkmin: [90, 96, 103, 111, 120, 130, 141, 153, 166, 180],
			atkmax: [110, 116, 123, 131, 140, 150, 161, 173, 186, 200],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
			type: 'sura-sword'
			
		},
		'شفرة حادة': {
			level: '80-90',
			atkmin: [192, 194, 197, 201, 206, 212, 219, 227, 236, 248],
			atkmax: [214, 216, 219, 223, 228, 234, 241, 249, 258, 270],
			atkspeed: [15, 15, 16, 17, 18, 20, 22, 24, 27, 30],
			type: 'sura-sword'
		},
		'سيف مقدس': {
			level: '80-90',
			atkmin: [145, 147, 150, 154, 159, 165, 173, 183, 195, 210],
			atkmax: [210, 212, 214, 217, 220, 224, 228, 234, 241, 250],
			atkspeed: [15, 15, 16, 17, 18, 20, 22, 24, 27, 30],
			type: 'sura-sword'
		},
		'نصل سن التنين': {
			level: '87-105',
			atkmin: [116, 126, 130, 138, 147, 166, 190, 227, 283, 366],
			atkmax: [164, 174, 178, 186, 195, 214, 238, 275, 331, 414],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'sura-sword'
		},
		' شفرة زودياك': {
			level: '105',
			atkmin: [116, 126, 130, 138, 147, 166, 190, 227, 283, 366],
			atkmax: [164, 174, 178, 186, 195, 214, 238, 275, 331, 414],
			atkspeed: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
			type: 'sura-sword'
		},
		'قاطع التنين الظلامي': {
			level: '96',
			atkmin: [111, 126, 131, 144, 153, 175, 203, 222, 280, 345, 381, 396, 411, 426, 451, 481],
			atkmax: [162, 177, 181, 195, 204, 226, 254, 273, 331, 401, 437, 452, 467, 482, 507, 537],
			atkspeed: [15, 15, 16, 16, 17, 17, 18, 18, 18, 20, 21, 22, 24, 25, 27, 30],
			type: 'sura-sword'
		},
		'سيف الكيانيت': {
			level: '105-115',
			atkmin: [227, 235, 240, 246, 252, 261, 271, 286, 329, 407],
			atkmax: [277, 285, 290, 296, 302, 311, 326, 341, 384, 462],
			atkspeed: [15, 16, 17, 18, 19, 20, 21, 22, 23, 25],
			type: 'sura-sword'
		},
		'قوس': {
			level: '1',
			atkmin: [7, 15, 23, 31, 39, 47, 55, 63, 69, 79],
			atkmax: [29, 37, 45, 53, 61, 69, 77, 85, 91, 101],
			atkspeed: [28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
			type: 'bow'
		},
		'قوس طويل': {
			level: '5',
			atkmin: [15, 23, 31, 39, 47, 55, 63, 71, 79, 87],
			atkmax: [51, 59, 67, 75, 83, 91, 99, 107, 115, 123],
			atkspeed: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
			type: 'bow'
		},
		'قوس مركب': {
			level: '10',
			atkmin: [19, 27, 35, 43, 51, 59, 67, 75, 83, 91],
			atkmax: [57, 65, 73, 81, 89, 97, 105, 113, 121, 129],
			atkspeed: [27, 27, 27, 27, 27, 27, 27, 27, 27, 27],
			type: 'bow'
		},
		'قوس حربي': {
			level: '15',
			atkmin: [26, 34, 42, 50, 58, 66, 74, 82, 90, 98],
			atkmax: [70, 78, 86, 94, 102, 110, 118, 126, 134, 142],
			atkspeed: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
			type: 'bow'
		},
		'قوس الخيالة الطويل': {
			level: '20',
			atkmin: [40, 48, 56, 64, 72, 80, 88, 96, 104, 112],
			atkmax: [88, 96, 104, 112, 120, 128, 136, 144, 152, 160],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bow'
		},
		'قوس الخيالة الحربي': {
			level: '25',
			atkmin: [50, 57, 64, 71, 78, 87, 97, 108, 120, 133],
			atkmax: [118, 125, 132, 139, 146, 155, 165, 176, 188, 201],
			atkspeed: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
			type: 'bow'
		},
		'قوس قرن الوعل': {
			level: '30',
			atkmin: [85, 92, 98, 105, 111, 120, 129, 140, 151, 164],
			atkmax: [178, 185, 191, 198, 204, 213, 222, 233, 244, 257],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bow'
		},
		'قوس مزخرف بالنحاس': {
			level: '32',
			atkmin: [62, 69, 76, 83, 90, 97, 111, 122, 134, 147],
			atkmax: [128, 135, 142, 149, 156, 163, 177, 188, 200, 213],
			atkspeed: [26, 26, 26, 26, 26, 26, 26, 26, 26, 26],
			type: 'bow'
		},
		'قوس مدمر': {
			level: '36',
			atkmin: [64, 71, 78, 85, 92, 101, 111, 122, 134, 147],
			atkmax: [150, 157, 164, 171, 178, 187, 197, 208, 220, 233],
			atkspeed: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
			type: 'bow'
		},
		'قوس العين الحمراء': {
			level: '40',
			atkmin: [65, 72, 79, 86, 93, 102, 112, 123, 135, 148],
			atkmax: [194, 201, 208, 215, 222, 231, 241, 252, 264, 277],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bow'
		},
		'قوس شوكة الورقة': {
			level: '45',
			atkmin: [106, 112, 118, 124, 130, 138, 147, 157, 168, 180],
			atkmax: [206, 212, 218, 224, 230, 238, 247, 257, 268, 280],
			atkspeed: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
			type: 'bow'
		},
		'قوس قرن الثور': {
			level: '50',
			atkmin: [116, 122, 128, 134, 140, 148, 157, 167, 178, 190],
			atkmax: [216, 222, 228, 234, 240, 248, 257, 267, 278, 290],
			atkspeed: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
			type: 'bow'
		},
		'قوس وحيد القرن': {
			level: '55',
			atkmin: [139, 145, 151, 157, 163, 171, 180, 190, 201, 213],
			atkmax: [213, 219, 225, 231, 237, 245, 254, 264, 275, 287],
			atkspeed: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
			type: 'bow'
		},
		'قوس الجناح العملاق': {
			level: '60',
			atkmin: [135, 141, 147, 153, 159, 167, 176, 186, 197, 209],
			atkmax: [251, 257, 263, 269, 275, 283, 292, 302, 313, 325],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bow'
		},
		'قوس المشمش': {
			level: '65',
			atkmin: [190, 196, 203, 211, 220, 230, 241, 253, 266, 280],
			atkmax: [290, 296, 303, 311, 320, 330, 341, 353, 366, 380],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
			type: 'bow'
		},
		'قوس التنين الاصفر': {
			level: '65',
			atkmin: [187, 195, 204, 214, 225, 237, 250, 264, 289, 324],
			atkmax: [293, 301, 310, 320, 331, 343, 356, 370, 395, 430],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bow'
		},
		'قوس التنين الأزرق': {
			level: '70',
			atkmin: [187, 193, 200, 208, 217, 227, 238, 250, 263, 277],
			atkmax: [293, 299, 306, 314, 323, 333, 344, 356, 369, 383],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bow'
		},
		'قوس الغراب الحديدي': {
			level: '75',
			atkmin: [190, 196, 203, 211, 220, 230, 241, 253, 266, 280],
			atkmax: [290, 296, 303, 311, 320, 330, 341, 353, 366, 380],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
			type: 'bow'
		},
		'قوس الشيطان العملاق': {
			level: '80-90',
			atkmin: [325, 330, 336, 343, 351, 360, 370, 381, 393, 410],
			atkmax: [431, 432, 434, 437, 440, 444, 449, 454, 460, 470],
			atkspeed: [15, 15, 16, 17, 18, 20, 22, 24, 27, 30],
			type: 'bow'
		},
		'قوس العنقاء': {
			level: '87-105',
			atkmin: [237, 247, 251, 259, 270, 287, 311, 348, 404, 487],
			atkmax: [436, 446, 450, 458, 469, 486, 510, 547, 603, 686],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bow'
		},
		'قوس التنين الظلامي': {
			level: '96',
			atkmin: [233, 246, 258, 269, 286, 266, 310, 347, 393, 476, 501, 516, 531, 546, 561, 591 ],
			atkmax: [439, 452, 464, 475, 492, 354, 516, 553, 599, 682, 711, 726, 741, 756, 771, 801],
			atkspeed: [15, 15, 16, 16, 17, 17, 18, 18, 18,  20, 21, 22, 24, 25, 27 ,30],
			type: 'bow'
		},
		' قوس زودياك': {
			level: '105',
			atkmin: [237, 247, 251, 259, 270, 287, 311, 348, 404, 487],
			atkmax: [436, 446, 450, 458, 469, 486, 510, 547, 603, 686],
			atkspeed: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
			type: 'bow'
		},
		'قوس الكيانيت': {
			level: '105-115',
			atkmin: [348, 356, 361, 367, 373, 382, 392, 407, 450, 528],
			atkmax: [549, 557, 562, 568, 574, 583, 598, 613, 656, 734],
			atkspeed: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
			type: 'bow'
		},
		'خنجر': {
			level: '1',
			atkmin: [8, 12, 16, 20, 24, 28, 32, 36, 40, 44],
			atkmax: [11, 15, 19, 23, 27, 31, 35, 39, 43, 47],
			atkspeed: [28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
			type: 'dagger'
		},
		'أميجا': {
			level: '5',
			atkmin: [12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
			atkmax: [16, 20, 24, 28, 32, 36, 40, 44, 48, 52],
			atkspeed: [28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
			type: 'dagger'
		},
		'خنجر كوبرا': {
			level: '10',
			atkmin: [13, 17, 21, 25, 29, 33, 37, 41, 45, 49],
			atkmax: [15, 19, 23, 27, 31, 35, 39, 43, 47, 51],
			atkspeed: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
			type: 'dagger'
		},
		'تسع شفرات': {
			level: '15',
			atkmin: [14, 18, 22, 26, 30, 34, 38, 42, 46, 50],
			atkmax: [18, 22, 26, 30, 34, 38, 42, 46, 50, 54],
			atkspeed: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
			type: 'dagger'
		},
		'خنجر مقص': {
			level: '20',
			atkmin: [15, 19, 23, 27, 31, 35, 39, 43, 47, 51],
			atkmax: [19, 23, 27, 31, 35, 39, 43, 47, 51, 55],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'dagger'
		},
		'سكين قصير': {
			level: '25',
			atkmin: [28, 31, 34, 37, 40, 45, 51, 58, 66, 75],
			atkmax: [32, 35, 38, 41, 44, 49, 55, 62, 70, 79],
			atkspeed: [27, 27, 27, 27, 27, 27, 27, 27, 27, 27],
			type: 'dagger'
		},
		'خنجر الورقة السوداء': {
			level: '30',
			atkmin: [40, 43, 45, 48, 50, 55, 60, 67, 74, 83],
			atkmax: [44, 47, 49, 52, 54, 59, 64, 71, 78, 87],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'dagger'
		},
		'سكين الحظ': {
			level: '32',
			atkmin: [30, 33, 36, 39, 42, 47, 53, 60, 68, 77],
			atkmax: [36, 39, 42, 45, 48, 53, 59, 66, 74, 83],
			atkspeed: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
			type: 'dagger'
		},
		'سكين عضة القط': {
			level: '36',
			atkmin: [33, 36, 39, 42, 45, 50, 55, 63, 71, 80],
			atkmax: [37, 40, 43, 46, 49, 54, 59, 67, 75, 84],
			atkspeed: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
			type: 'dagger'
		},
		'خنجر قناع الشيطان': {
			level: '40',
			atkmin: [36, 39, 42, 45, 48, 53, 59, 66, 74, 83],
			atkmax: [40, 43, 46, 49, 52, 57, 63, 70, 78, 87],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'dagger'
		},
		'خنجر قبضة الشيطان': {
			level: '45',
			atkmin: [47, 49, 51, 53, 55, 59, 64, 70, 77, 85],
			atkmax: [51, 53, 55, 57, 59, 63, 68, 74, 81, 89],
			atkspeed: [27, 27, 27, 27, 27, 27, 27, 27, 27, 27],
			type: 'dagger'
		},
		'خنجر دموي': {
			level: '50',
			atkmin: [48, 50, 52, 54, 56, 60, 65, 71, 78, 86],
			atkmax: [56, 58, 60, 62, 64, 68, 73, 79, 86, 94],
			atkspeed: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
			type: 'dagger'
		},
		'خنجر الأضلاع': {
			level: '55',
			atkmin: [49, 51, 53, 55, 57, 61, 66, 72, 79, 87],
			atkmax: [59, 61, 63, 65, 67, 71, 76, 82, 89, 97],
			atkspeed: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
			type: 'dagger'
		},
		'شاكرام': {
			level: '60',
			atkmin: [53, 55, 57, 59, 61, 65, 70, 76, 83, 91],
			atkmax: [65, 67, 69, 71, 73, 77, 82, 88, 95, 103],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'dagger'
		},
		'سكينة صاعقة': {
			level: '65',
			atkmin: [74, 80, 87, 95, 104, 114, 125, 137, 150, 164],
			atkmax: [86, 92, 99, 107, 116, 126, 137, 149, 162, 176],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
			type: 'dagger'
		},
		'سكين التنين': {
			level: '65',
			atkmin: [74, 82, 91, 101, 112, 124, 137, 151, 176, 211],
			atkmax: [86, 94, 103, 113, 124, 136, 149, 163, 188, 223],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'dagger'
		},
		'سكينة السيامي': {
			level: '70',
			atkmin: [74, 80, 87, 95, 104, 114, 125, 137, 150, 164],
			atkmax: [86, 92, 99, 107, 116, 126, 137, 149, 162, 176],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'dagger'
		},
		'شاكرام جناح الشيطان': {
			level: '75',
			atkmin: [83, 91, 100, 110, 121, 133, 146, 160, 184, 220],
			atkmax: [92, 100, 109, 119, 130, 142, 155, 169, 193, 229],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
			type: 'dagger'
		},
		'سكين عديم الحيوية': {
			level: '80-90',
			atkmin: [225, 227, 229, 232, 235, 239, 245, 253, 263, 275],
			atkmax: [235, 238, 242, 247, 253, 260, 268, 277, 288, 300],
			atkspeed: [15, 15, 16, 17, 18, 20, 22, 24, 27, 30],
			type: 'dagger'
		},
		'نصل العناصر الخمس': {
			level: '87-105',
			atkmin: [116, 128, 128, 143, 157, 179, 209, 255, 326, 431],
			atkmax: [136, 148, 148, 163, 177, 199, 229, 275, 346, 451],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'dagger'
		},
		'خنجر التنين الظلامي': {
			level: '96',
			atkmin: [112, 128, 133, 143, 157, 179, 209, 255, 316, 417, 452, 467, 482, 497, 512, 542 ],
			atkmax: [139, 155, 160, 170, 184, 206, 236, 282, 343, 444, 483, 498, 513, 528, 543, 573],
			atkspeed: [16, 16, 17, 17, 18, 18, 19, 19, 19, 21, 23, 25, 26, 28, 30, 33],
			type: 'dagger'
		},
		'خنجر زودياك': {
			level: '105',
			atkmin: [116, 128, 133, 143, 157, 179, 209, 255, 326, 431],
			atkmax: [136, 148, 153, 163, 177, 199, 229, 275, 346, 451],
			atkspeed: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
			type: 'dagger'
		},
		'خنجر الكيانيت': {
			level: '105-115',
			atkmin: [227, 237, 243, 251, 260, 274, 290, 314, 372, 472],
			atkmax: [249, 259, 265, 273, 282, 296, 317, 341, 399, 499],
			atkspeed: [15, 16, 17, 18, 19, 20, 22, 24, 27, 30],
			type: 'dagger'
		},
		'مروحة': {
			level: '1',
			atkmin: [11, 18, 25, 32, 39, 46, 53, 60, 67, 74],
			atkmax: [15, 22, 29, 36, 43, 50, 57, 64, 71, 78],
			atkspeed: [26, 26, 26, 26, 26, 26, 26, 26, 26, 26],
			type: 'fan'
		},
		'مروحة حديدية': {
			level: '5',
			atkmin: [11, 18, 25, 32, 39, 46, 53, 60, 67, 74],
			atkmax: [17, 24, 31, 38, 45, 52, 59, 66, 73, 80],
			atkspeed: [26, 26, 26, 26, 26, 26, 26, 26, 26, 26],
			type: 'fan'
		},
		'مروحة النمر الاسود': {
			level: '10',
			atkmin: [13, 20, 27, 34, 41, 48, 55, 62, 69, 76],
			atkmax: [19, 26, 33, 40, 47, 54, 61, 68, 75, 82],
			atkspeed: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
			type: 'fan'
		},
		'مروحة جناح طائر الكركي': {
			level: '15',
			atkmin: [17, 24, 31, 38, 45, 52, 59, 66, 73, 80],
			atkmax: [21, 28, 35, 42, 49, 56, 63, 70, 77, 84],
			atkspeed: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
			type: 'fan'
		},
		'مروحة الطاووس': {
			level: '20',
			atkmin: [18, 25, 32, 39, 46, 53, 60, 67, 74, 81],
			atkmax: [24, 31, 38, 45, 52, 59, 66, 73, 80, 87],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'fan'
		},
		'مروحة مائية': {
			level: '25',
			atkmin: [27, 33, 39, 45, 51, 59, 68, 78, 89, 101],
			atkmax: [41, 47, 53, 59, 65, 73, 82, 92, 103, 115],
			atkspeed: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
			type: 'fan'
		},
		'مروحة الريح الخريفي': {
			level: '30',
			atkmin: [43, 49, 54, 60, 65, 73, 81, 91, 101, 113],
			atkmax: [55, 61, 66, 72, 77, 85, 93, 103, 113, 125],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'fan'
		},
		'مروحة حجرية': {
			level: '32',
			atkmin: [30, 36, 42, 51, 57, 62, 71, 81, 92, 104],
			atkmax: [46, 52, 58, 67, 73, 78, 87, 97, 108, 120],
			atkspeed: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
			type: 'fan'
		},
		'مروحة محيطية': {
			level: '36',
			atkmin: [35, 41, 47, 53, 59, 67, 76, 86, 97, 109],
			atkmax: [45, 51, 57, 63, 69, 77, 86, 96, 107, 119],
			atkspeed: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
			type: 'fan'
		},
		'مروحة لادغة': {
			level: '40',
			atkmin: [37, 43, 49, 55, 61, 69, 78, 88, 99, 111],
			atkmax: [53, 59, 65, 71, 77, 85, 94, 104, 115, 127],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'fan'
		},
		'مروحة الفونيكس': {
			level: '45',
			atkmin: [50, 55, 60, 65, 70, 77, 85, 94, 104, 115],
			atkmax: [64, 69, 74, 79, 84, 91, 99, 108, 118, 129],
			atkspeed: [28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
			type: 'fan'
		},
		'مروحة ثلاثية': {
			level: '50',
			atkmin: [49, 54, 59, 64, 69, 76, 84, 93, 103, 114],
			atkmax: [73, 78, 83, 88, 93, 100, 108, 117, 127, 138],
			atkspeed: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
			type: 'fan'
		},
		'مروحة حاجب العين': {
			level: '55',
			atkmin: [52, 57, 62, 67, 72, 79, 87, 96, 106, 117],
			atkmax: [78, 83, 88, 93, 98, 105, 113, 122, 132, 143],
			atkspeed: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
			type: 'fan'
		},
		'مروحة الشمس': {
			level: '60',
			atkmin: [55, 60, 65, 70, 75, 82, 90, 99, 109, 120],
			atkmax: [83, 88, 93, 98, 103, 110, 118, 127, 137, 148],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'fan'
		},
		'مروحة النجاة': {
			level: '65',
			atkmin: [69, 75, 82, 90, 99, 109, 120, 132, 145, 159],
			atkmax: [91, 97, 104, 112, 121, 131, 142, 154, 167, 181],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'fan'
		},
		'مروحة الطير السماوي': {
			level: '65',
			atkmin: [64, 72, 81, 91, 102, 114, 127, 141, 166, 201],
			atkmax: [96, 104, 113, 123, 134, 146, 159, 173, 198, 233],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'fan'
		},
		'مروحة النشوة': {
			level: '70',
			atkmin: [69, 75, 82, 90, 99, 109, 120, 132, 145, 159],
			atkmax: [91, 97, 104, 112, 121, 131, 142, 154, 167, 181],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'fan'
		},
		'مروحة الشيطان': {
			level: '80-90',
			atkmin: [165, 168, 172, 177, 183, 190, 198, 206, 215, 225],
			atkmax: [185, 187, 189, 192, 195, 200, 207, 216, 225, 235],
			atkspeed: [15, 15, 16, 17, 18, 20, 22, 24, 27, 30],
			type: 'fan'
		},
		'مروحة التنين': {
			level: '87-105',
			atkmin: [115, 123, 126, 132, 141, 155, 174, 203, 248, 315],
			atkmax: [173, 181, 184, 190, 199, 213, 232, 261, 306, 373],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'fan'
		},
		'مروحة التنين الظلامي': {
			level: '96',
			atkmin: [119, 127, 130, 136, 145, 159, 178, 207, 242, 311, 337, 350, 364, 378, 393, 423 ],
			atkmax: [176, 184, 187, 193, 202, 216, 235, 264, 299, 370, 399, 412, 426, 440, 455, 485],
			atkspeed: [16, 16, 17, 17, 18, 18, 19, 19, 19, 21, 23, 25, 26, 28, 30, 33],
			type: 'fan'
		},
		'مروحة زودياك': {
			level: '105',
			atkmin: [115, 123, 126, 132, 141, 155, 174, 203, 248, 315],
			atkmax: [173, 181, 184, 190, 199, 213, 232, 261, 306, 373],
			atkspeed: [19, 20, 21, 22, 23, 24, 25, 27, 28, 30],
			type: 'fan'
		},
		'مروحة الكيانيت': {
			level: ' 105-115',
			atkmin: [226, 232, 236, 240, 244, 250, 255, 262, 294, 356],
			atkmax: [286, 292, 296, 300, 304, 310, 320, 327, 359, 421],
			atkspeed: [15, 16, 17, 18, 19, 20, 22, 24, 27, 30],
			type: 'fan'
		},
		'جرس نحاسي': {
			level: '10',
			atkmin: [13, 20, 27, 34, 41, 48, 55, 62, 69, 76],
			atkmax: [15, 22, 29, 36, 43, 50, 57, 64, 71, 78],
			atkspeed: [32, 32, 32, 32, 32, 32, 32, 32, 32, 32],
			type: 'bell'
		},
		'جرس فضي': {
			level: '15',
			atkmin: [20, 27, 34, 41, 48, 55, 62, 69, 76, 83],
			atkmax: [26, 33, 40, 47, 54, 61, 68, 75, 82, 89],
			atkspeed: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
			type: 'bell'
		},
		'جرس ذهبي': {
			level: '20',
			atkmin: [25, 32, 39, 46, 53, 60, 67, 74, 81, 88],
			atkmax: [35, 42, 49, 56, 63, 70, 77, 84, 91, 98],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bell'
		},
		'جرس عتيق': {
			level: '30',
			atkmin: [50, 56, 61, 67, 72, 80, 88, 98, 108, 120],
			atkmax: [70, 76, 81, 87, 92, 100, 108, 118, 128, 140],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bell'
		},
		'جرس اليشم': {
			level: '32',
			atkmin: [29, 35, 41, 47, 53, 61, 70, 80, 91, 103],
			atkmax: [39, 45, 51, 57, 63, 71, 80, 90, 101, 113],
			atkspeed: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
			type: 'bell'
		},
		'جرس النافورة': {
			level: '36',
			atkmin: [41, 47, 53, 59, 65, 73, 82, 92, 103, 115],
			atkmax: [51, 57, 63, 69, 75, 83, 92, 102, 113, 125],
			atkspeed: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
			type: 'bell'
		},
		'جرس المشمش': {
			level: '40',
			atkmin: [42, 48, 54, 60, 66, 74, 83, 93, 104, 116],
			atkmax: [60, 66, 72, 78, 84, 92, 101, 111, 122, 134],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bell'
		},
		'جرس سحري': {
			level: '50',
			atkmin: [59, 64, 69, 74, 79, 86, 94, 103, 113, 124],
			atkmax: [89, 94, 99, 104, 109, 116, 124, 133, 143, 154],
			atkspeed: [27, 27, 27, 27, 27, 27, 27, 27, 27, 27],
			type: 'bell'
		},
		'جرس الخنفساء الذهبي': {
			level: '55',
			atkmin: [68, 73, 78, 83, 88, 95, 103, 112, 118, 139],
			atkmax: [90, 95, 100, 105, 110, 117, 125, 134, 144, 155],
			atkspeed: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
			type: 'bell'
		},
		'جرس الخنفساء الحديدي': {
			level: '60',
			atkmin: [76, 81, 86, 91, 96, 103, 111, 120, 130, 141],
			atkmax: [104, 109, 114, 119, 124, 131, 139, 148, 158, 169],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bell'
		},
		'جرس السماء والأرض': {
			level: '65',
			atkmin: [72, 78, 85, 93, 102, 112, 123, 135, 148, 162],
			atkmax: [108, 114, 121, 129, 138, 148, 159, 171, 184, 198],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bell'
		},
		'جرس الطير الرعدي': {
			level: '65',
			atkmin: [91, 99, 108, 118, 129, 141, 154, 168, 193, 228],
			atkmax: [129, 137, 146, 156, 167, 179, 192, 206, 231, 266],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bell'
		},
		'جرس خيزراني': {
			level: '75',
			atkmin: [72, 80, 89, 99, 110, 122, 135, 149, 172, 209],
			atkmax: [108, 116, 125, 135, 146, 158, 171, 185, 208, 245],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
			type: 'bell'
		},
		'جرس فم التنين': {
			level: '80-90',
			atkmin: [170, 172, 176, 184, 194, 206, 220, 235, 254, 275],
			atkmax: [200, 202, 206, 213, 223, 235, 249, 266, 286, 310],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
			type: 'bell'
		},
		'جرس شبح التنين': {
			level: '87-105',
			atkmin: [166, 175, 178, 185, 195, 211, 232, 265, 316, 391],
			atkmax: [194, 203, 206, 213, 223, 239, 260, 293, 344, 419],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'bell'
		},
		'جرس التنين الظلامي': {
			level: '96',
			atkmin: [162, 171, 174, 191, 226, 228, 261, 292, 381, 404, 417, 431, 445, 481, 460, 497 ],
			atkmax: [197, 206, 209, 226, 242, 263, 296, 327, 416, 443, 456, 470, 558, 484, 499, 536],
			atkspeed: [15, 15, 16, 16, 17, 17, 18, 18, 18, 20, 21, 22, 24, 25, 27, 30],
			type: 'bell'
		},
		'جرس زودياك': {
			level: '105',
			atkmin: [166, 175, 178, 185, 195, 211, 232, 265, 316, 391],
			atkmax: [194, 203, 206, 213, 223, 239, 260, 293, 344, 419],
			atkspeed: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
			type: 'bell'
		},
		'جرس الكيانيت': {
			level: '105',
			atkmin: [277, 284, 288, 293, 298, 306, 313, 324, 362, 432],
			atkmax: [307, 314, 318, 323, 328, 336, 348, 359, 397, 467],
			atkspeed: [15, 16, 17, 18, 19, 20, 22, 24, 27, 30],
			type: 'bell'
		},

      //add by BodyBoy :D
		'شعلة حديدية': {
			level: '1',
			atkmin: [13, 20, 27, 34, 41, 48, 55, 62, 69, 76],
			atkmax: [15, 22, 29, 36, 43, 50, 57, 64, 71, 78],
			atkspeed: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
			type: 'Claw'
		},
		'حربة العنقاء': {
			level: '30',
			atkmin: [40, 43, 45, 48, 50, 55, 60, 67, 74, 83],
			atkmax: [44, 47, 49, 52, 54, 59, 67, 71, 78, 87],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'Claw'
		},
		'مخلب حديدي': {
			level: '45',
			atkmin: [57, 60, 62, 65, 67, 72, 77, 84, 91, 100],
			atkmax: [73, 76, 78, 81, 83, 88, 93, 100, 107, 116],
			atkspeed: [27, 27, 27, 27, 27, 27, 27, 27, 27, 27],
			type: 'Claw'
		},
		'مخلب فولاذي': {
			level: '60',
			atkmin: [69, 74, 79, 84, 89, 96, 104, 113, 123,134],
			atkmax: [91, 96, 101, 106, 111, 118, 126, 135, 145,156],
			atkspeed: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
			type: 'Claw'
		},
		'مخلب الجوارح': {
			level: '65',
			atkmin: [72, 77, 82, 87, 92, 99, 107, 116, 126, 137],
			atkmax: [108, 113, 118, 123, 128, 135, 143, 152, 162, 173],
			atkspeed: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
			type: 'Claw'
		},
		'مخلب الجعران': {
			level: '65',
			atkmin: [74, 79, 84, 89, 94, 101, 109, 118, 128, 139],
			atkmax: [100, 105, 110, 115, 120, 127, 135, 144, 154, 165],
			atkspeed: [17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
			type: 'Claw'
		},
		'مخلب الباز': {
			level: '70',
			atkmin: [80, 88, 97, 107, 118, 130, 143, 157, 182, 217],
			atkmax: [112, 120, 129, 139, 150, 162, 175, 189, 214, 249],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'Claw'
		},
		'مخلب الشوك': {
			level: '75',
			atkmin: [81, 87, 94, 102, 111, 121, 132, 144, 157,171],
			atkmax: [110, 116, 123, 131, 140, 150, 161, 173, 186,200],
			atkspeed: [17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
			type: 'Claw'
		},
		'ناب الذئب الأخضر': {
			level: '80-90',
			atkmin: [192, 203, 262, 262, 262, 272, 282, 282, 292,302],
			atkmax: [245, 256, 315, 315, 315, 325, 335, 335, 345,355],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'Claw'
		},
		'مخلب التنين الظلامي': {
			level: '96',
			atkmin: [115, 125, 129, 137, 148, 165, 189, 226, 272, 355, 378, 392, 406, 420, 435, 465 ],
			atkmax: [172, 182, 186, 194, 205, 222, 246, 283, 329, 412, 439, 453, 467, 481, 496, 526],
			atkspeed: [16, 16, 17, 17, 18, 18, 19, 19, 19, 21, 23, 25, 26, 28, 30, 33],
			type: 'Claw'
		},
		'سيد التنانين': {
			level: '87-105',
			atkmin: [122, 132, 136, 144, 155, 172, 196, 233, 289,372],
			atkmax: [165, 175, 179, 187, 198, 215, 239, 276, 332,415],
			atkspeed: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
			type: 'Claw'
		},
		'مخلب زودياك': {
			level: '105',
			atkmin: [122, 132, 136, 144, 155, 172, 196, 233, 289,372],
			atkmax: [165, 175, 179, 187, 198, 215, 239, 276, 332,415],
			atkspeed: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
			type: 'Claw'
		},
		'مخلب الكيانيت': {
			level: '105-115',
			atkmin: [233, 241, 246, 252, 258, 267, 277, 292, 335,413],
			atkmax: [278, 286, 291, 297, 303, 312, 327, 342, 385,463],
			atkspeed: [15, 16, 17, 18, 19, 20, 22, 24, 27, 30],
			type: 'Claw'
		},
	}; // end tacgGlobals.weapons