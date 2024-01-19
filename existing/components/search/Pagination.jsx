import React, { useState, useEffect, useRef } from 'react';
import { pushValuesToRouteQuery, assignValuesFromRouteQuery } from 'utils';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import ArrowUp from 'assets/arrowUp.svg';

const Pagination = ({ pageSize, totalCount, onChange, queryMode, ...props }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [btns, setBtns] = useState([]);
  const totalPages = useRef(1);
  const router = useRouter();
  const { t } = useTranslation('common');

  useEffect(() => {
    const pageObj = { page: 1 };
    assignValuesFromRouteQuery(router, pageObj);
    setCurrentPage(Number(pageObj.page || 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  useEffect(() => {
    totalPages.current = Math.ceil(totalCount / pageSize);
    const newBtns = [];
    for (let page = 1; page <= totalPages.current; page++) {
      if (totalPages.current > 4) {
        if (
          page === 1 ||
          currentPage === page ||
          currentPage - 1 === page ||
          currentPage + 1 === page ||
          (page === 2 && currentPage === 4) ||
          (page === totalPages.current && currentPage === totalPages.current - 2) ||
          (currentPage < 4 && totalPages.current > 3 && page < 4) ||
          (currentPage === totalPages.current && page === currentPage - 2)
        ) {
          newBtns.push({ label: page, value: page });
        } else if (
          (page === 2 && currentPage > 3) ||
          (page !== 2 && page === totalPages.current && totalPages.current > 3)
        ) {
          newBtns.push({ label: '...', value: page });
        }
      } else {
        newBtns.push({ label: page, value: page });
      }
    }
    setBtns(newBtns);
  }, [pageSize, totalCount, currentPage]);

  const setPage = (newPage) => {
    if (queryMode) {
      pushValuesToRouteQuery(router, {
        page: newPage > 1 ? newPage : null,
      });
    } else if (onChange) {
      onChange({
        page: newPage,
      });
    }
  };

  if (totalPages.current <= 1) return;

  return (
    <div className="flex justify-center items-center" {...props}>
      <button
        className="btn small secondary circle p-0 m-3"
        disabled={currentPage <= 1}
        onClick={() => setPage(currentPage - 1)}
      >
        <ArrowUp className="-rotate-90" />
      </button>
      {btns.map((btn) => (
        <button
          className={classNames(
            'hidden md:block btn text small m-3 px-6 w-auto',
            currentPage === btn.value && 'bg-grey3 text-white',
          )}
          key={btn.value}
          disabled={btn.label === '...'}
          onClick={() => setPage(btn.value)}
        >
          {btn.label} {currentPage === btn.value}
        </button>
      ))}

      <div className="md:hidden text-subheading mx-5">
        {t('general.$pagination', { currentPage, totalPages: totalPages.current })}
      </div>

      <button
        className="btn small secondary circle p-0 m-3"
        disabled={currentPage >= totalPages.current}
        onClick={() => setPage(currentPage + 1)}
      >
        <ArrowUp className="rotate-90" />
      </button>
    </div>
  );
};
export default Pagination;
