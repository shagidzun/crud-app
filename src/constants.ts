import { ArticleType } from './App.tsx';

const text: ArticleType = {
	id: 1,
	title: 'Foo',
	content:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt?\n' +
		'\t\t\t\t\tCorporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum\n' +
		'\t\t\t\t\tquibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia\n' +
		'\t\t\t\t\tcorrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed\n' +
		'\t\t\t\t\tnumquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius\n' +
		'\t\t\t\t\tnostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum\n' +
		'\t\t\t\t\tdoloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo\n' +
		'\t\t\t\t\tvoluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto\n' +
		'\t\t\t\t\tperspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,\n' +
		'\t\t\t\t\tdelectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae\n' +
		'\t\t\t\t\trepellendus est labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa\n' +
		'\t\t\t\t\tdeleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium doloremque\n' +
		'\t\t\t\t\tarchitecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta blanditiis est expedita\n' +
		'\t\t\t\t\teius debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam\n' +
		'\t\t\t\t\tprovident. Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est aliquid dolor\n' +
		'\t\t\t\t\tmolestias libero. Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim\n' +
		'\t\t\t\t\tperferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et tempore cumque quod!\n' +
		'\t\t\t\t\tQui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem\n' +
		'\t\t\t\t\taccusantium nulla. Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque\n' +
		'\t\t\t\t\teveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos\n' +
		'\t\t\t\t\tnumquam at nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis\n' +
		'\t\t\t\t\tlibero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.',
};

const lsArticles = JSON.parse(localStorage.getItem('articles') ?? '[]');

export { text, lsArticles };
