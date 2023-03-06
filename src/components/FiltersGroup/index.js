import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    changeRating,
    activeRatingId,
    ratingsList,
    changeCategory,
    categoryOptions,
    activeCategoryId,
    changeSearchInput,
    searchInput,
    clearFilters,
    enterSearchInput,
  } = props

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        type="search"
        className="search-input"
        placeholder="search"
        onChange={onChangeSearchInput}
        value={searchInput}
        onKeyDown={onEnterSearchInput}
      />
      <BsSearch className="search-icon" />
    </div>
  )

  const renderCategoryItem = eachCategory => {
    const {categoryId, name} = eachCategory
    const isActive = categoryId === activeCategoryId
    const categoryClassName = isActive
      ? `category-name active-category-name`
      : `category-name`
    const onClickCategory = () => changeCategory(categoryId)
    return (
      <li className="category-item" key={categoryId} onClick={onClickCategory}>
        <p className={categoryClassName}>{name}</p>
      </li>
    )
  }

  const renderCategory = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">
        {categoryOptions.map(eachCategory => renderCategoryItem(eachCategory))}
      </ul>
    </>
  )

  const renderRating = eachRating => {
    const {ratingId, imageUrl} = eachRating
    const onClickRatingItem = () => {
      changeRating(ratingId)
    }
    const ratingClassName =
      activeRatingId === ratingId ? `and-up active-rating` : `and-up`
    return (
      <li className="rating-item" key={ratingId} onClick={onClickRatingItem}>
        <img className="rating-img" src={imageUrl} alt={`rating ${ratingId}`} />
        <p className={ratingClassName}>& up</p>
      </li>
    )
  }

  const renderRatingList = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">
        {ratingsList.map(eachRating => renderRating(eachRating))}
      </ul>
    </div>
  )

  const onClickClearFilters = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategory()}
      {renderRatingList()}
      <button
        className="clear-filters-btn"
        type="button"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
