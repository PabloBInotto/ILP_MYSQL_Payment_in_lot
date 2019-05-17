CREATE TABLE `workers` (
  `id` int(11) NOT NULL,
  `receiver` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `receiver_tax` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `receiver_pension` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sourceAmount` int(4) NOT NULL,
  `sourceAmout_tax` float NOT NULL,
  `souceAmount_pension` float NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE VIEW pay_and_deductions AS
select 
`receiver` AS `receiver`,
`receiver_tax` AS `receiver_tax`,
`receiver_pension` AS `receiver_pension`,
round((`sourceAmount` - ((`sourceAmount` * `sourceAmout_tax`) + (`sourceAmount` * `souceAmount_pension`))),0) AS `sourceAmount`,
round((`sourceAmount` * `sourceAmout_tax`),0) AS `sourceAmout_tax`,
round((`sourceAmount` * `souceAmount_pension`),0) AS `souceAmount_pension` 
from `workers` where (`status` = 1);
