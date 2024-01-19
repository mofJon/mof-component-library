import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ModuleBase, SearchFilters, Pagination, EntityCard } from 'components';
import { getSearchFilters } from 'utils';
import { selectPageId } from '../store/index';

const CardListingGridModule = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const router = useRouter();
  const fetchController = useRef(null);
  const queryData = useRef({ filters: [], page: 1 });
  const pageId = useSelector(selectPageId);

  useEffect(() => {
    let newFilters = { filters: getSearchFilters(router), page: Number(router.query.page || 1) };
    if (data?.filtersAndCards?.cards && JSON.stringify(newFilters) === JSON.stringify(queryData.current)) {
      setCards(data.filtersAndCards.cards);
      setTotalCount(data.filtersAndCards.totalCount);
    } else if (JSON.stringify(newFilters) !== JSON.stringify(queryData.current) && pageId) {
      queryData.current = newFilters;
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId, data]);

  useEffect(() => {
    let newFilters = { filters: getSearchFilters(router), page: Number(router.query.page || 1) };
    if (JSON.stringify(newFilters) !== JSON.stringify(queryData.current) && pageId) {
      queryData.current = newFilters;
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId, router.query]);

  const getData = async () => {
    setLoading(true);
    if (fetchController.current) {
      fetchController.current.abort();
    }
    const controller = new AbortController();
    fetchController.current = controller;

    const reqData = {
      PageId: pageId,
      //Filters: filters.current.filters,
      Filters: queryData.current.filters.map((item) => ({ FieldName: 'tag', FieldGuids: item.FieldGuids })),
      PageSize: data.filtersAndCards.pageSize,
      PageNumber: queryData.current.page,
      CardsType: data.filtersAndCards.cardType,
      Featured: 0,
    };

    const dataRes = await fetch(`/api/umbraco/api/ProductCard/GetCards`, {
      method: 'POST',
      signal: fetchController.current?.signal,
      body: JSON.stringify(reqData),
    }).catch(console.error);

    if (dataRes && dataRes.ok) {
      const data = await dataRes.json();
      setCards(data.cards);
      setTotalCount(data.totalCount);
    }
    setLoading(false);
  };

  return (
    <ModuleBase data={data} className="py-20">
      <div className="container">
        <SearchFilters filters={data.filtersAndCards.filter} queryMode />

        {cards.map((card) => (
          <EntityCard
            key={card.moduleId}
            data={card}
            large
            className="w-[327px] md:w-[688px] lg:w-[1224px]"
            loading={loading}
          />
        ))}

        <Pagination totalCount={totalCount} pageSize={data.filtersAndCards.pageSize} queryMode />
      </div>
    </ModuleBase>
  );
};
export default CardListingGridModule;
