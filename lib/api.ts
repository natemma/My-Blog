export async function fetchGraphQL(query: string, variables: any = {}) {
 
 
  const res = await fetch("http://localhost:3001/api/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 0 },
  });

  const json = await res.json();
  return json.data;
}

export async function GetAllPosts() {
  const query = `
    query {
      posts(where: {status: { equals: "published" } }) {
        id
        title
        slug
        excerpt
        createdAt
        image {
          url
        }
        category {
          name
        }
      }
    }
  `;

  return fetchGraphQL(query);
}

export async function GetOnePost(slug: string) {
  const query = `
    query GetPost($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        excerpt
        content
        createdAt
        updatedAt
        image {
          url
          width
          height
        }
        category {
          name
          slug
        }
        tags {
          name
        }
        author {
          name
        }
      }
    }
  `;

  const variables = { slug };
  
  try {
    const data = await fetchGraphQL(query, variables);
    
    if (!data || !data.post) {
      console.log('No post data returned from GraphQL');
      return null;
    }
    
    const post = data.post;
    console.log('Raw GraphQL post:', post);

    const getPost = {
      id: post.id,
      title: post.title || "Без названия",
      slug: post.slug || slug,
      excerpt: post.excerpt || "",
      content: post.content || "",
      date: post.createdAt 
        ? new Date(post.createdAt).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })
        : "Не указана",
      category: post.category?.name || "Без категории",
      tags: post.tags || [],
      author: post.author?.name || "Аноним",
      image: post.image || null,
    };
    
    console.log('Transformed post:', getPost);
    return getPost;
    
  } catch (error) {
    console.error('Error in GetOnePost:', error);
    return null;
  }
}


export async function GetAllCategories(): Promise<Category[]> {
  const query =`
  query Categories {
  categories {
    name
    id
    slug
    postsCount
  }
  }
  `;
  const response = await fetchGraphQL(query);
  return response.categories;
}

export async function GetPostByCateg(slug:string) {
  const query =`
   query PostsByCategory($slug: String!) {
      posts(
        where: { 
          AND: [
            { status: { equals: "published" } }
            { category: { slug: { equals: $slug } } }
          ]
        }
        orderBy: { createdAt: desc }
      ) {
        id
        title
        slug
        excerpt
        createdAt
        updatedAt
        image {
          url
        }
        category {
          name
          slug
        }
        tags {
          name
        }
        author {
          name
        }
      }
    }`;
   const variables = { slug };

    try {
    const data = await fetchGraphQL(query, variables);
    return data?.posts || [];
  } catch (error) {
    return [];
  }
}
