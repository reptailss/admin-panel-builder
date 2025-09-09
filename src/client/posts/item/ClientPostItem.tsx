import React, {useMemo} from 'react';
import {OnDeletePost, OnEditPost} from "@client/posts/types/events";
import {Box, IconButton} from "@mui/material";
import sx from './sx'
import {IField} from "@fields/interfaces/field";
import {FieldPreviewValue} from "@client/fieldPreviewValue/FieldPreviewValue";
import Stack from "@mui/material/Stack";
import {EditIconSvg} from "@client/icons/EditIconSvg";
import {DeleteIconSvg} from "@client/icons/DeleteIconSvg";

type GetCardPreviewValueCb<Post extends object, Field extends IField> = (post: Post) => Field['_value']
type GetCardPreviewImageCb<Post extends object> = (post: Post) => string

export function ClientPostItem<Post extends object>({
														post,
														onDeletePost,
														onEditPost,
														cardPreviewFields,
														cardPreviewImage,
														guards,
													}: {
	post: Post
	onDeletePost: OnDeletePost
	onEditPost: OnEditPost
	cardPreviewFields: Array<{
		value: keyof Post | GetCardPreviewValueCb<Post, IField<any>>
		field: IField<Post[keyof Post]> | IField<any>
	}>
	cardPreviewImage: keyof Post | GetCardPreviewImageCb<Post> | null
	guards:{
		read: boolean
		create: boolean
		update: boolean
		delete: boolean
	}
}) {
	
	const src:string | null = useMemo(() => {
		return typeof cardPreviewImage === 'function' ? cardPreviewImage(post) : typeof cardPreviewImage === 'string' ? post[cardPreviewImage] as string : null
	}, [cardPreviewImage, post]);
	
	return (
		<Box
			sx={sx.root}
		>
			{src && <Box
                component={'img'}
                alt={'img'}
                src={src}
                sx={sx.img}
            />}
			<Box sx={sx.overlay}/>
			
			<Stack
				direction={'row'}
				justifyContent={'flex-end'}
			>
				{guards.update && <IconButton
                    onClick={() => onEditPost(post)}
                >
                    <EditIconSvg color={'white'}/>
                </IconButton>}
				
				{guards.delete && <IconButton
                    onClick={() => onDeletePost(post)}
                >
                    <DeleteIconSvg color={'white'}/>
                </IconButton>}
			</Stack>
			
			<Box
				sx={sx.content}
			>
				{cardPreviewFields.length >= 1 && cardPreviewFields.map((preview, index) => {
					const value = typeof preview.value === 'function' ? preview.value(post) : post[preview.value]
					return (
						<FieldPreviewValue
							key={index}
							field={preview.field}
							value={value}
						/>
					)
				})}
			
			</Box>
		</Box>
	);
};

