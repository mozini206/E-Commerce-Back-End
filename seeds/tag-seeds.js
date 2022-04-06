const {
	Tag
} = require('../models');
const tagData = [{
	tag_name: 'Europa',
}, {
	tag_name: 'Timo',
}, {
	tag_name: 'Three',
}, {
	tag_name: 'Trivago',
}, {
	tag_name: 'green',
}, {
	tag_name: 'white',
}, {
	tag_name: 'gold',
}, {
	tag_name: 'Movies Inspirational',
}, ];
const seedTags = () => Tag.bulkCreate(tagData);