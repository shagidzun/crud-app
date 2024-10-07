import './App.css';
import { AppBar, Box, Button, Dialog, DialogTitle, Paper, Stack, TextField, Toolbar, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ReactNode, Ref, useRef, useState } from 'react';
import { lsArticles } from './constants.ts';

export type ArticleType = {
	id: number;
	title: string;
	content: string;
};

function Article({ children }: { children: ReactNode }) {
	return (
		<Paper sx={{ p: '20px', position: 'relative' }} elevation={2}>
			{children}
		</Paper>
	);
}

function EditArticle({
	isNewArticle,
	isOpen,
	onClose,
	onSave,
	title,
	content,
	titleRef,
	contentRef,
}: {
	isNewArticle: boolean;
	isOpen: boolean;
	onClose: VoidFunction;
	onSave: VoidFunction;
	title: string;
	content: string;
	titleRef: Ref<HTMLInputElement>;
	contentRef: Ref<HTMLInputElement>;
}) {
	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			transitionDuration={0}
			PaperProps={{ sx: { width: '100%', maxWidth: 738 } }}
		>
			<DialogTitle>{isNewArticle ? 'Добавить новость' : 'Редактирование'}</DialogTitle>
			<Paper sx={{ p: '20px' }} elevation={2}>
				<Stack alignItems={'center'} gap={'24px'} width="100%">
					<TextField
						required
						inputRef={titleRef}
						label={'Заголовок'}
						fullWidth
						defaultValue={isNewArticle ? '' : title}
					/>
					<TextField
						required
						inputRef={contentRef}
						label={'Текст'}
						minRows={12}
						maxRows={20}
						fullWidth
						multiline
						defaultValue={isNewArticle ? '' : content}
					/>
					<Stack direction={'row'} gap={'10px'}>
						<Button variant={'contained'} onClick={onSave}>
							{isNewArticle ? 'Добавить' : 'Сохранить'}
						</Button>
						<Button variant={'outlined'} onClick={onClose}>
							Отмена
						</Button>
					</Stack>
				</Stack>
			</Paper>
		</Dialog>
	);
}

function App() {
	const [articles, setArticles] = useState<ArticleType[]>(lsArticles);
	const [isNewArticle, setIsNewArticle] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const currentArticle = useRef<ArticleType>();
	const titleRef = useRef<HTMLInputElement>(null);
	const contentRef = useRef<HTMLInputElement>(null);

	const handleEdit = (article: ArticleType) => {
		currentArticle.current = article;
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
		setIsNewArticle(false);
	};

	const handleNewArticle = () => {
		setIsNewArticle(true);
		setIsOpen(true);
	};

	const handleDelete = (article: ArticleType) => {
		const newArticles = articles.filter((item) => item.id !== article.id);
		setArticles(newArticles);
		localStorage.setItem('articles', JSON.stringify(newArticles));
	};

	const handleDeleteAll = () => {
		setArticles([]);
		localStorage.setItem('articles', JSON.stringify([]));
	};

	const handleSave = () => {
		if (titleRef.current && contentRef.current) {
			let newArticles: ArticleType[] = [];

			if (isNewArticle) {
				const lastArticleId = articles[articles.length - 1]?.id ?? 0;
				const newArticle: ArticleType = {
					id: lastArticleId + 1,
					title: titleRef.current.value,
					content: contentRef.current.value,
				};

				newArticles = articles.concat([newArticle]);
			} else if (currentArticle.current) {
				const { id } = currentArticle.current;
				const editedArticle: ArticleType = {
					id,
					title: titleRef.current.value,
					content: contentRef.current.value,
				};

				newArticles = articles.map((article) => (article.id === id ? editedArticle : article));
			}

			if (contentRef.current.value && titleRef.current.value) {
				setArticles(newArticles);
				localStorage.setItem('articles', JSON.stringify(newArticles));
				setIsNewArticle(false);
				setIsOpen(false);
			}
		}
	};

	return (
		<Stack sx={{ minWidth: { md: '768px', sm: '576px', xs: '400px' }, position: 'relative', minHeight: '600px' }}>
			<AppBar sx={{ position: 'sticky' }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Новости
					</Typography>
					<Box>
						<Button variant={'text'} color={'inherit'} onClick={handleNewArticle}>
							<Typography sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }} variant={'body2'}>
								Добавить
							</Typography>
							<AddIcon sx={{ display: { md: 'none' } }} />
						</Button>
						<Button variant={'text'} color={'inherit'} onClick={handleDeleteAll}>
							<Typography sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }} variant={'body2'}>
								Удалить все
							</Typography>
							<DeleteForeverIcon sx={{ display: { md: 'none' } }} />
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="main">
				{articles.length > 0 ? (
					articles?.map((article) => (
						<Article key={article.id}>
							<Toolbar sx={{ position: 'absolute', top: 0, right: 0 }}>
								<Button onClick={handleEdit.bind(null, article)}>
									<EditIcon />
								</Button>
								<Button>
									<DeleteIcon onClick={handleDelete.bind(null, article)} />
								</Button>
							</Toolbar>
							<Typography variant={'h4'} sx={{ wordBreak: 'break-all' }} align={'left'} marginBottom={'20px'}>
								{article.title}
							</Typography>
							<Typography sx={{ wordBreak: 'break-all' }} align={'justify'}>
								{article.content}
							</Typography>
						</Article>
					))
				) : (
					<Article>
						<Typography variant={'h6'}>Новостей нет</Typography>
					</Article>
				)}
			</Box>
			<EditArticle
				isNewArticle={isNewArticle}
				isOpen={isOpen}
				onClose={handleClose}
				onSave={handleSave}
				title={currentArticle.current?.title ?? ''}
				content={currentArticle.current?.content ?? ''}
				titleRef={titleRef}
				contentRef={contentRef}
			/>
		</Stack>
	);
}

export default App;
