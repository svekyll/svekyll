import fs from 'fs';
import { contributors } from '$lib/config';

export async function get() {

    const imports = import.meta.glob("./*.{md,svx}");
    let body = [];

    for (const path in imports) {
        body.push(
            imports[path]().then(({ metadata, ...rest }) => {
                const contents = fs.readFileSync("src/routes/" + path);
                const readingTime = parseInt(contents.toString().length / 500, 10);
                const dateTriple = path.split('-').slice(0, 3);
                const datestamp = dateTriple.join('-').replace('./', '');

                if (metadata && metadata.published && metadata.title) {
                    return {
                        metadata,
                        dateTriple,
                        contributors,
                        readingTime,
                        datestamp,
                        path,
                    };
                } else {
                    return undefined;
                }
            })
        );
    }

    const posts = await Promise.all(body);

    return {
        body: JSON.stringify(posts.filter(p => p).reverse()),
    };
}