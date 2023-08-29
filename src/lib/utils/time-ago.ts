import moment from 'moment';

export const timeAgo = (date: Date | string) => {
	if (typeof date === 'string') date = new Date(date);

	return moment(date).fromNow();
};
