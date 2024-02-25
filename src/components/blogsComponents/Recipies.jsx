import React, { useEffect, useState } from 'react';
import RecipieCard from './recipieCard';
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from '../Loading';
import ResultsNotFound from '../ResultsNotFound';

function Recipies({ recipies, recipeCategories, fetchRecipies, limit, refreshAll }) {
    const [hasMore, setHasMore] = useState(false);
    useEffect(() => {
        console.log(limit);
        setHasMore(limit < 100);
    }, [recipies])

    return (
        <div className="container flex flex-col justify-around items-between">

            <InfiniteScroll
                dataLength={recipies.length}
                next={fetchRecipies}
                hasMore={hasMore}
                loader={
                    <Loading />
                }
                style={
                    {
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }
                }>
                {
                    recipeCategories.map(
                        (category, i) => {
                            return (
                                <div key={i} className="h-full w-full flex flex-col justify-around items-between">
                                    {
                                        i > 0 && <hr />
                                    }
                                    <h1 className="text-gray-900 title-font text-xl capitalize font-medium p-4"> {category} </h1>
                                    <div className="flex flex-wrap -m-4">
                                        {
                                            recipies.filter(
                                                recipe => recipe.cuisineType[0] === category
                                            ).map(
                                                (recipe, i) => {
                                                    return <RecipieCard key={i} recipe={recipe} />
                                                }
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </InfiniteScroll>
            {
                !hasMore &&
                <ResultsNotFound message={"No More Results!"} refreshAll={refreshAll} />
            }
        </div>
    )
}

export default Recipies
