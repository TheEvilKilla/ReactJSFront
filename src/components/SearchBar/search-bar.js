import React, { useState } from 'react';
import * as Element from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import closeIcon from '../../assets/close.png';
import searchIcon from '../../assets/magnifying-glass.png';
import './search-bar.css';

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const filter = e => {
        const searchWord = e.target.value.toLowerCase();
        setInputValue(searchWord);
        const newFilter = data.filter(v => {
            const lowered = v.name.toLowerCase();
            return lowered.includes(searchWord);
        });

        searchWord === '' ? setFilteredData([]) : setFilteredData(newFilter);
    }

    const clearInput = () => {
        setFilteredData([]);
        setInputValue('');
    }

    return (
        <div className='search-bar' style={{
            paddingTop: '45px',
            paddingBottom: '45px',
            paddingLeft: '0',
            paddingRight: '0'
        }}>
            <Element.InputGroup className='search-bar-input-group' hasValidation='false' style={{
                border: '2px solid #000000',
                borderRadius: '50px',
            }}>
                <Element.Form.Control className='search-bar-input' type='text' value={inputValue} placeholder={placeholder} onChange={filter} style={{
                    borderColor: 'rgba(0,0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0)',
                }} />
                <Element.Button className='search-bar-button' style={{
                    display: 'flex',
                    border: 'none',
                    borderColor: 'rgba(0,0,0,1)',
                    backgroundColor: 'rgba(0,0,0,0)',
                    alignItems: 'center'
                }}>{
                        filteredData.length !== 0 || inputValue.length !== 0 ?
                            <img className='search-bar-button-image' src={closeIcon} onClick={clearInput} style={{
                                maxHeight: '20px',
                                maxWidth: '20px',
                            }} /> :
                            <img className='search-bar-button-image' src={searchIcon} style={{
                                maxHeight: '26px',
                                maxWidth: '26px',
                            }} />
                    }
                </Element.Button>
            </Element.InputGroup>
            {filteredData != 0 && (
                <div className='results' style={{
                    marginTop: '5px',
                    width: '100%',
                    height: '200px',
                    backgroundColor: 'rgba(255,255,255,0)',
                    boxShadow: '0 5px 15px rgba(0,0,0,.35)',
                    overflow: 'hidden',
                    overflowY: 'auto'
                }}>
                    {
                        filteredData.slice(0, 10).map(k => {
                            return <a className='search-bar-item' href={k.link} target='_blank' style={{
                                display: 'flex'
                            }}>
                                <p style={{
                                    marginLeft: '14px',
                                    marginTop: '14px'
                                }}>{k.name}</p>
                            </a>
                        })
                    }
                </div>
            )}
        </div>
    );
} export default SearchBar;