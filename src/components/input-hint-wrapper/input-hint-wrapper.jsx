import classNames from 'classnames';
import './input-hint-wrapper.scss';

const getHintByErrorType = (hints, error, hasMultipleHints, keywords, defaultHint) => {
  if (!hasMultipleHints) {
    return hints.find((hint) => hint.type === error.type).message;
  }

  if (keywords) {
    const sortMatchedKeywords = (str, subStrArr) => {
      const res = subStrArr
        .filter((item) => error.message.includes(item.key))
        .map((subStr) => ({ key: subStr, pos: str.indexOf(subStr.string), string: subStr.string }));
      return res.filter((item) => item.pos !== -1);
    };

    const getSpan = (str, sortedKeywords, origKeywords) => {
      const convertToSpan = (str, sortedKeywords) => {
        const style = sortedKeywords.find((keyword) => keyword.string === str) ? 'error-accent' : '';
        return <span className={style}>{str}</span>;
      };

      const getLeftPart = (string, sortedKeywords, origKeywords, i) => {
        if (i === 0) {
          const last = string.split(origKeywords[i].string);
          const currentAccent = convertToSpan(origKeywords[i].string, sortedKeywords);
          return [last[0], currentAccent, last[1]];
        }

        const temp = string.split(origKeywords[i].string);
        const currentAccent = convertToSpan(origKeywords[i].string, sortedKeywords);
        return [...getLeftPart(temp[0], sortedKeywords, origKeywords, i - 1), currentAccent, temp[1]];
      };

      const { length } = origKeywords;
      return getLeftPart(str, sortedKeywords, origKeywords, length - 1);
    };

    const matchedKeywords = sortMatchedKeywords(defaultHint, keywords);
    const tempArr = getSpan(defaultHint, matchedKeywords, keywords);

    return tempArr;
  }

  if (error.type !== 'validate') return hints.find((hint) => hint.type === error.type).message;

  const res = hints.find((hint) => hint.type === error.message);

  return res.element;
};

export const InputHintWrapper = ({
  error,
  isFocused,
  isEmpty,
  hints,
  hasMultipleHints,
  defaultHint,
  keywords,
  children,
}) => (
  <div className='input-hint'>
    {children}
    {isEmpty && isFocused ? (
      <div data-test-id='hint' className={classNames('input-hint__hint', { empty: !error?.type })}>
        {defaultHint}
      </div>
    ) : error?.type !== 'validate' ? (
      <div
        data-test-id='hint'
        className={classNames(
          'input-hint__hint',
          // { empty: !error?.type },
          { empty: isEmpty || isFocused },
          { 'error-accent': error?.type }
        )}
      >
        {error?.type ? getHintByErrorType(hints, error, hasMultipleHints) : defaultHint}
      </div>
    ) : (
      <div
        data-test-id='hint'
        className={classNames('input-hint__hint', { empty: !error?.type }, { allHighlited: error?.type && !isFocused })}
      >
        {error?.type ? getHintByErrorType(hints, error, hasMultipleHints, keywords, defaultHint) : defaultHint}
      </div>
    )}
  </div>
);
