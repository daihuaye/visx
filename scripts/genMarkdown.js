function stringOfLength(string, length) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    newString += string;
  }
  return newString;
}

function generateTitle(name) {
  const title = '### &lt;' + name + ' /&gt;';
  return title + '\n';
}

function generateDesciption(description) {
  return description + '\n';
}

function generatePropType(type) {
  let values;
  if (Array.isArray(type.value)) {
    values =
      '(' +
      type.value
        .map(function(typeValue) {
          return typeValue.name || typeValue.value;
        })
        .join('|') +
      ')';
  } else {
    values = type.value;
  }

  return '' + type.name + (values ? values : '') + '';
}

function generatePropDefaultValue(value) {
  return '`default: ' + value.value + '`';
}

function generateProp(propName, prop, name) {
  const anchor = `\"#${name}__${propName}\"`;
  return (
    `<a name=${anchor} href=${anchor}>#</a> ` +
    `_${name}_.__${propName}__${prop.type ? `&lt;${generatePropType(prop.type)}&gt;` : ''} ${
      prop.required ? '`required`' : ''
    } ${prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : ''}` +
    (prop.description ? `\n\n${prop.description}` + ' ' : ' ') +
    '\n'
  );
}

function generateProps(props, name) {
  return Object.keys(props)
    .sort()
    .map(function(propName) {
      return generateProp(propName, props[propName], name);
    })
    .join('\n');
}

function generateMarkdown(name, reactAPI) {
  const markdownString =
    generateTitle(name) +
    generateDesciption(reactAPI.description) +
    generateProps(reactAPI.props, name);

  return markdownString;
}

module.exports = generateMarkdown;
